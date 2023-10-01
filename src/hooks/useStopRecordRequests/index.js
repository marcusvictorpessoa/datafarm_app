import {useState} from 'react';
import useConnection from '../useConnection';
import {resourcesRequest} from '../../services/requests';
import {Endpoints} from '../../services/endpoints';
import {getToken} from '../../utils/token';

export default function useStopRecordRequests() {
  const [loading, setLoading] = useState(false);
  const [resources, setResources] = useState({});

  const {getConnectionState} = useConnection();

  async function getResourcesFromAPI() {
    setLoading(true);
    try {
      const tkn = await getToken();
      const data = await resourcesRequest(Endpoints.resources, tkn);
      //console.log(data.data.resources.reasons); <- change bellow for this
      setResources(data.data);
    } catch (error) {
      throw new Error('falha ao buscar recursos da API');
    } finally {
      setLoading(false);
    }
  }

  async function getResourcesFromStorage() {
    setLoading(true);
    try {
    } catch (error) {
      throw new Error(
        'falha ao buscar recursos do armazenamento do dispositivo',
      );
    } finally {
      setLoading(false);
    }
  }

  async function getResources() {
    if (await getConnectionState()) {
      await getResourcesFromAPI();
    } else {
      await getResourcesFromStorage();
    }
  }

  return {
    loading,
    getResources,
    resources,
  };
}
