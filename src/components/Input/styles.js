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
    borderRadius: 1,
    width: '100%',
  },
  inputBorder: {
    borderBottomColor: Colors.lightGray,
  },
  inputBorderError: {
    borderBottomColor: Colors.paradisePink,
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
  erroMsg: {
    position: 'absolute',
    top: 50,
    fontSize: 15,
    color: Colors.paradisePink,
  },
});
