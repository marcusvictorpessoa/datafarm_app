import {useState} from 'react';
import useConnection from '../useConnection';
import {resourcesRequest} from '../../services/requests';
import {Endpoints} from '../../services/endpoints';
import {getToken} from '../../utils/token';
import {getResourcesOffline, storeResources} from '../../utils/helpers';
import {Alert} from 'react-native';

export default function useStopRecordRequests() {
  const [loading, setLoading] = useState(false);

  const {getConnectionState} = useConnection();

  async function getResourcesFromAPI() {
    setLoading(true);
    try {
      const tkn = await getToken();
      const data = await resourcesRequest(Endpoints.resources, tkn);
      storeResources(data?.data?.resources);
      return data?.data?.resources;
    } catch (error) {
      throw new Error('falha ao buscar recursos da API');
    } finally {
      setLoading(false);
    }
  }

  async function getResourcesFromStorage() {
    setLoading(true);
    try {
      const data = await getResourcesOffline();
      return data;
    } catch (error) {
      throw new Error(
        'falha ao buscar recursos do armazenamento do dispositivo',
      );
    } finally {
      setLoading(false);
    }
  }

  async function getResources() {
    try {
      if (await getConnectionState()) {
        const data = await getResourcesFromAPI();
        return data;
      } else {
        const data = await getResourcesFromStorage();
        return data;
      }
    } catch (error) {
      Alert.alert(
        'DataFarm',
        error?.message,
        [
          {
            text: 'entendido',
          },
        ],
        {cancelable: true},
      );
    }
  }

  return {
    loading,
    getResources,
  };
}
