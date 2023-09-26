import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {ButtonStyles, TxtBtnStyles} from './styles';
import {Colors} from '../../themes/colors';

export default function Button({...props}) {
  return (
    <TouchableOpacity
      {...props}
      style={[ButtonStyles(props.mt).button, props.disabled && {opacity: 0.7}]}>
      {props.loading ? (
        <ActivityIndicator size="large" color={Colors.white} />
      ) : (
        <Text style={TxtBtnStyles.txtButton}>{props.txt}</Text>
      )}
    </TouchableOpacity>
  );
}
