import {View, Text} from 'react-native';
import {SynchronizeInfoStyles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Colors} from '../../themes/colors';

export default function SynchronizeInfo({numberRegisters}) {
  return (
    <View style={SynchronizeInfoStyles.card}>
      <MaterialCommunityIcons
        name="database-sync"
        color={Colors.quickSilver}
        size={100}
      />
      <Text style={SynchronizeInfoStyles.numberRegs}>
        {numberRegisters} registros para sincronizar.
      </Text>
    </View>
  );
}
