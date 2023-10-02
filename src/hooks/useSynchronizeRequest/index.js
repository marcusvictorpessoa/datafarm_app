import {useState, useEffect} from 'react';
import {clearAllData, getAllData} from '../../services/database/querys';
import {useIsFocused} from '@react-navigation/native';
import {Endpoints} from '../../services/endpoints';
import {syncsRequest} from '../../services/requests';
import {getToken} from '../../utils/token';
import {Alert} from 'react-native';

export default function useSynchronizeRequest() {
  const [loading, setLoading] = useState(false);
  const [registers, setRegisters] = useState([]);
  const [qtdRegisters, setQtdRegisters] = useState(0);

  const focused = useIsFocused();

  async function getData() {
    const result = await getAllData();
    setRegisters(result);
    setQtdRegisters(result?.length);
  }
  async function handleSynchronize() {
    setLoading(true);
    try {
      const tkn = await getToken();
      const allSync = Promise.all(
        registers?.map(async reg => {
          let body = {};

          body = {
            uuid: reg?.uuid,
            note: reg?.note,
            idFarm: reg?.id_farm,
            idField: reg?.id_field,
            idReason: reg?.id_reason,
            idMachinery: reg?.id_machinery,
            minutes: reg?.minutes,
            longitude: reg?.latitude,
            latitude: reg?.longitude,
          };
          const response = await syncsRequest(
            Endpoints.stop_register,
            tkn,
            body,
          );

          return true;
        }),
      );
      await clearAllData();

      Alert.alert(
        'DataFarm',
        'Dados sincronizados com sucesso!',
        [
          {
            text: 'ok',
            onPress: () => {
              getData();
            },
          },
        ],
        {
          cancelable: true,
        },
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (focused) {
      getData();
    }
  }, [focused]);

  return {
    registers,
    qtdRegisters,
    handleSynchronize,
    loading,
  };
}
