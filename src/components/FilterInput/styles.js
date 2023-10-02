import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const FilterInputStyles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    fontSize: 18,
    color: Colors.black,
  },
});
