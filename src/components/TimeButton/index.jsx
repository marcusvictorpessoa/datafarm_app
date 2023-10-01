import {View, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {Colors} from '../../themes/colors';
import Strings from '../../strings';
import { TimeButtonStyles } from './styles';

export default function TimeButton({timeValue, isDisabled}) {
  return (
    <View style={[TimeButtonStyles.timeBtnContainer, isDisabled && TimeButtonStyles.fade]}>
      <TouchableOpacity>
        <AntDesign name={'pluscircleo'} size={25} color={Colors.deepSaffron} />
      </TouchableOpacity>
      <View style={TimeButtonStyles.timeBtn}>
        <Text style={TimeButtonStyles.timeTxtBtn}>
          {timeValue} {Strings.minutes}
        </Text>
      </View>
      <TouchableOpacity>
        <AntDesign name={'minuscircleo'} size={25} color={Colors.deepSaffron} />
      </TouchableOpacity>
    </View>
  );
}
