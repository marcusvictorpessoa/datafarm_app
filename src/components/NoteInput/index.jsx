import {TextInput} from 'react-native';
import {NoteInputStyles} from './styles';

export default function NoteInput({value, change, edit}) {
  return (
    <TextInput
      style={NoteInputStyles.noteInput}
      multiline={true}
      numberOfLines={5}
      textAlignVertical="top"
      value={value}
      editable={edit}
      onChangeText={txt => change(txt)}
    />
  );
}
