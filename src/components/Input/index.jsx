import {TextInput, View} from 'react-native';
import {InputStyles} from './styles';

export default function Input({...props}, isRightIcon, children) {
  return (
    <View style={InputStyles.inputWrapper}>
      <TextInput {...props} style={InputStyles.input} />
      {isRightIcon && children}
    </View>
  );
}
