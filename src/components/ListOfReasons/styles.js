import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const ListOfReasonStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 5,
    borderRadius: 5,
    minHeight: 250,
    marginTop: 10,
  },
  reason: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  txtReason: {
    color: Colors.black,
    fontSize: 17,
    marginLeft: 5,
  },
  selectedReason: {
    backgroundColor: Colors.alabaster,
  },
});
