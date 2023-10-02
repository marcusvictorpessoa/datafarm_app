import {Keys} from '../../routes/keys';
import {useNavigation} from '@react-navigation/native';
import {getToken} from '../../utils/token';
import createTable from '../../services/database/createTable';

export default function useConnect() {
  const navigation = useNavigation();

  async function initApp() {
    //await createTable();
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
