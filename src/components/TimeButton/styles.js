import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const TimeButtonStyles = StyleSheet.create({
  timeBtnContainer: {
    flexDirection: 'row',
    width: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeBtn: {
    backgroundColor: Colors.deepSaffron,
    borderRadius: 15,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTxtBtn: {
    color: Colors.white,
    fontSize: 17,
  },
  fade: {
    opacity: 0.5,
  },
});
