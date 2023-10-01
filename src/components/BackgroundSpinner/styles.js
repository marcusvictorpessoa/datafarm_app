import {StyleSheet} from 'react-native';
import { Colors } from '../../themes/colors';

export const BackgroundSpinnerStyles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    opacity: 0.5,
    zIndex: 5,
  },
});
