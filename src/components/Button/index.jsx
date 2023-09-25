import {TouchableOpacity, Text} from 'react-native';
import {ButtonStyles, TxtBtnStyles} from './styles';

export default function Button({txt, mt}) {
  return (
    <TouchableOpacity style={ButtonStyles(mt).button}>
      <Text style={TxtBtnStyles.txtButton}>{txt}</Text>
    </TouchableOpacity>
  );
}
