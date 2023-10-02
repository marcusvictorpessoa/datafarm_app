import {StatusBar, View, ActivityIndicator} from 'react-native';
import {ConnectStyles} from './styles';
import {Colors} from '../../themes/colors';
import Logo from '../../components/Logo';
import {useEffect} from 'react';
import useConnect from '../../hooks/useConnect';
import SplashScreen from 'react-native-splash-screen';

export default function Connect() {
  const {initApp} = useConnect();

  useEffect(() => {
    SplashScreen.hide();
    initApp();
  }, []);

  return (
    <View style={ConnectStyles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.limeGreen}
      />
      <Logo
        logo_with={'100%'}
        logo_height={'60%'}
        logo_color={Colors.white}
        container_flex={0.25}
        container_width={'100%'}
        container_height={'100%'}
      />
      <ActivityIndicator size={'large'} color={Colors.white} />
    </View>
  );
}
