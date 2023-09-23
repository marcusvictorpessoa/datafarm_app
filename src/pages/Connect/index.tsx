import { StatusBar, View } from 'react-native';
import { ConnectStyles } from './styles';
import { Colors } from '../../themes/colors';

export default function Connect() {
    return (
        <View style={ConnectStyles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.green} />
        </View>
    );
}