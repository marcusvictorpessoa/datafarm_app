import {useState} from 'react';
import {loginRequest} from '../../services/requests';
import {Endpoints} from '../../services/endpoints';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Keys} from '../../routes/keys';
import {setToken} from '../../utils/token';
import useConnection from '../useConnection';

export default function useSignInRequest() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {getConnectionState} = useConnection();

  async function handleLogin(email, pwd, partnerId) {
    setLoading(true);

    const isConnected = await getConnectionState();
    if (!isConnected) {
      setLoading(false);
      return Alert.alert(
        'DataFarm',
        'Você precisa de internet para acessar o App!',
        [
          {
            text: 'entendido',
          },
        ],
      );
    }
    try {
      const data = await loginRequest(Endpoints.auth, {
        email: email,
        senha: pwd,
        idPartner: partnerId,
      });
      await setToken(data?.data?.token);
      navigation.reset({
        index: 0,
        routes: [{name: Keys.tab_nav}],
      });
    } catch (error) {
      Alert.alert('DataFarm', 'Verifique suas credenciais!', [
        {
          text: 'entendido',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    handleLogin,
  };
}
