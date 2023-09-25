import { StatusBar, View, ActivityIndicator } from 'react-native';
import { ConnectStyles } from './styles';
import { Colors } from '../../themes/colors';
import Logo from '../../components/Logo';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keys } from '../../routes/keys';


export default function Connect() {

    const navigation = useNavigation();

    function simulateSplashTime() {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: Keys.signin }]
            })
        }, 3000)
    }

    useEffect(() => {
        simulateSplashTime();
    }, []);

    return (
        <View style={ConnectStyles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.limeGreen} />
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