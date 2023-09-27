import {useState} from 'react';
import {loginRequest} from '../../services/requests';
import {Endpoints} from '../../services/endpoints';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Keys} from '../../routes/keys';

export default function useSignInRequest() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function handleLogin(email, pwd, partnerId) {
    setLoading(true);
    try {
      const data = await loginRequest(Endpoints.auth, {
        email: email,
        senha: pwd,
        idPartner: partnerId,
      });
      navigation.reset({
        index: 0,
        routes: [{name: Keys.tab_nav}],
      });
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
