import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export const StoppingPlacesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 5,
    paddingHorizontal: 15,
  },
  contentCard: {
    marginTop: 25,
  },
  registersNotFound: {
    fontSize: 18,
    alignSelf: 'center',
    color: Colors.black,
  },
});
