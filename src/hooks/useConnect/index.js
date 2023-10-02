import {Keys} from '../../routes/keys';
import {useNavigation} from '@react-navigation/native';
import {getToken} from '../../utils/token';
import createTable from '../../services/database/createTable';
import {PermissionsAndroid} from 'react-native';

export default function useConnect() {
  const navigation = useNavigation();

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Datafarm',
          message:
            'O app precisa da permissão para acessar sua localização para funcionar corretamente',
          buttonNeutral: 'Pergunte-me mais tarde',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      /*if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }*/
    } catch (err) {
      console.warn(err);
    }
  }

  async function initApp() {
    await createTable();
    await requestLocationPermission();
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
