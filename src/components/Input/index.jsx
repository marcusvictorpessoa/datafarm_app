import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import {InputStyles} from './styles';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Colors} from '../../themes/colors';

export default function Input({...props}) {
  const [secureInput, setSecureInput] = useState(props.isPwdInput);

  return (
    <View style={InputStyles.inputWrapper}>
      <TextInput
        secureTextEntry={secureInput}
        {...props}
        style={[
          InputStyles.input,
          !!props.errorMsg
            ? InputStyles.inputBorderError
            : InputStyles.inputBorder,
        ]}
        placeholderTextColor={Colors.lightGray}
      />
      {props.isPwdInput && (
        <TouchableOpacity
          style={InputStyles.iconWrapper}
          onPress={() => setSecureInput(!secureInput)}>
          <Icon
            name={secureInput ? 'eye-off' : 'eye'}
            size={30}
            color={Colors.lightGray}
            style={InputStyles.rightIcon}
          />
        </TouchableOpacity>
      )}
      <Text style={InputStyles.erroMsg}>{props.errorMsg}</Text>
    </View>
  );
}
