import {Keys} from '../../routes/keys';
import {useNavigation} from '@react-navigation/native';

export default function useConnect() {
  const navigation = useNavigation();

  function simulateSplashTime() {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: Keys.signin}],
      });
    }, 3000);
  }

  return {
    simulateSplashTime,
  };
}
