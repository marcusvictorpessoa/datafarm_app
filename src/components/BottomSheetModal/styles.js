import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const BottomSheetModalStyles = StyleSheet.create({
  bottomSheetContainer: {
    marginTop: 10,
  },
  btnBottomSheet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  bgModal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bgTopModal: {
    backgroundColor: Colors.black,
    opacity: 0.5,
    height: '55%',
  },
  contentModal: {
    backgroundColor: Colors.white,
    height: '45%',
    borderTopLeftRadius: 25,
  },
});
