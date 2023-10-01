import {Text, TouchableOpacity, View, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {Colors} from '../../themes/colors';
import {useState} from 'react';
import {BottomSheetModalStyles} from './styles';

export default function BottomSheetModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={BottomSheetModalStyles.bottomSheetContainer}>
      <TouchableOpacity
        style={BottomSheetModalStyles.btnBottomSheet}
        onPress={() => setShowModal(true)}>
        <View>
          <Text>{'name'}</Text>
          <Text>{'serial number'}</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={25}
          color={Colors.lightGray}
        />
      </TouchableOpacity>
      {showModal && (
        <Modal
          visible={showModal}
          transparent
          animationType="slide"
          onRequestClose={() => setShowModal(false)}>
          <View style={BottomSheetModalStyles.bgModal}>
            <View style={BottomSheetModalStyles.bgTopModal}></View>
            <View style={BottomSheetModalStyles.contentModal}></View>
          </View>
        </Modal>
      )}
    </View>
  );
}
