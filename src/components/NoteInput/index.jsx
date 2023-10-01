import {TextInput} from 'react-native';
import {NoteInputStyles} from './styles';

export default function NoteInput() {
  return (
    <TextInput
      style={NoteInputStyles.noteInput}
      multiline={true}
      numberOfLines={5}
      textAlignVertical='top'
    />
  );
}
