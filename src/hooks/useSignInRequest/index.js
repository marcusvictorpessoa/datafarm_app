import {useState} from 'react';
import {loginRequest} from '../../services/requests';
import {Endpoints} from '../../services/endpoints';
import {Alert} from 'react-native';

export default function useSignInRequest() {
  const [loading, setLoading] = useState(false);

  async function handleLogin(email, pwd, partnerId) {
    setLoading(true);
    try {
      const data = await loginRequest(Endpoints.auth, {
        email: email,
        senha: pwd,
        idPartner: partnerId,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
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
