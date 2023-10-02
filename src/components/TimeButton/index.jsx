import {View, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {Colors} from '../../themes/colors';
import Strings from '../../strings';
import {TimeButtonStyles} from './styles';

export default function TimeButton({
  timeValue,
  isDisabled,
  handlePlus,
  handleMinus,
}) {
  return (
    <View style={[TimeButtonStyles.timeBtnContainer]}>
      <TouchableOpacity onPress={() => handlePlus()}>
        <AntDesign name={'pluscircleo'} size={25} color={Colors.deepSaffron} />
      </TouchableOpacity>
      <View
        style={[TimeButtonStyles.timeBtn, isDisabled && TimeButtonStyles.fade]}>
        <Text style={TimeButtonStyles.timeTxtBtn}>
          {timeValue} {Strings.minutes}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => handleMinus()}
        disabled={isDisabled}
        style={[isDisabled && TimeButtonStyles.fade]}>
        <AntDesign name={'minuscircleo'} size={25} color={Colors.deepSaffron} />
      </TouchableOpacity>
    </View>
  );
}
