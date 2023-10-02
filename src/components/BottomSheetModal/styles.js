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
  valueBtnBottomSheet: {
    fontSize: 17,
    color: Colors.quickSilver,
  },
  serialBtnBottomSheet: {
    fontSize: 14,
    color: Colors.lightGray,
  },
  valueSelectedBtnBottomSheet: {
    fontSize: 17,
    color: Colors.black,
  },
  serialSelectedBtnBottomSheet: {
    fontSize: 14,
    color: Colors.black,
  },
  bgModal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bgCloseModal: {
    backgroundColor: Colors.black,
    opacity: 0.3,
    height: '100%',
  },
  contentModal: {
    backgroundColor: Colors.white,
    height: '45%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    zIndex: 7,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  titleModal: {
    fontSize: 19,
    fontWeight: 'bold',
    color: Colors.black,
  },
  optionsContainer: {
    padding: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.black,
  },
  txtOption: {
    fontSize: 20,
    color: Colors.black,
  },
  selectedOption: {
    backgroundColor: Colors.alabaster,
    justifyContent: 'space-between',
  },
  selectFarmTxt: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.black,
  },
});
