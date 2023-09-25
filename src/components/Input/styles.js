import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const InputStyles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.lightGray,
    color: Colors.jet,
    fontSize: 18,
    fontWeight: '500',
    borderRadius: 1,
    width: '100%'
  },
});
