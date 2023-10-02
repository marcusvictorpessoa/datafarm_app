import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const RegisterCardStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    paddingBottom: 10,
    marginTop: 10,
  },
  farmName: {
    fontSize: 22,
    color: Colors.black,
  },
  typeReason: {
    fontSize: 17,
    color: Colors.quickSilver,
  },
  datetime: {
    fontSize: 14,
    color: Colors.quickSilver,
  },
  col1: {
    height: '100%',
    alignItems: 'flex-start',
    width: '45%',
  },
  col2: {
    height: '100%',
    width: '37%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
