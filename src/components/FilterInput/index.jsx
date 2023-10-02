import {View, TextInput} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {Colors} from '../../themes/colors';
import {FilterInputStyles} from './styles';
import Strings from '../../strings';

export default function FilterInput({value, onChange}) {
  return (
    <View style={FilterInputStyles.inputWrapper}>
      <MaterialIcons
        name="search"
        size={25}
        color={Colors.quickSilver}
        style={FilterInputStyles.icon}
      />
      <TextInput
        style={FilterInputStyles.input}
        placeholder={Strings.filterPlaceholder}
        placeholderTextColor={Colors.quickSilver}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
