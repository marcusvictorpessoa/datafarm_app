import {Keys} from '../../routes/keys';
import {useNavigation} from '@react-navigation/native';
import {getToken} from '../../utils/token';

export default function useConnect() {
  const navigation = useNavigation();

  async function initApp() {
    if (await getToken()) {
      navigation.reset({
        index: 0,
        routes: [{name: Keys.tab_nav}],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: Keys.signin}],
      });
    }
  }

  return {
    initApp,
  };
}
