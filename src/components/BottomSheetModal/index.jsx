import {Text, TouchableOpacity, View, Modal, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {Colors} from '../../themes/colors';
import {useState} from 'react';
import {BottomSheetModalStyles} from './styles';
import Strings from '../../strings';

export default function BottomSheetModal({
  title,
  valuePlaceholder,
  value,
  serialValue,
  serialPlaceholder,
  options,
  selectValue,
  isDisable,
}) {
  const [showModal, setShowModal] = useState(false);

  function selectOption(op) {
    selectValue(op);
    setShowModal(false);
  }

  return (
    <View style={BottomSheetModalStyles.bottomSheetContainer}>
      <TouchableOpacity
        disabled={isDisable}
        style={BottomSheetModalStyles.btnBottomSheet}
        onPress={() => setShowModal(true)}>
        <View>
          {value ? (
            <Text style={BottomSheetModalStyles.valueSelectedBtnBottomSheet}>
              {value}
            </Text>
          ) : (
            <Text style={BottomSheetModalStyles.valueBtnBottomSheet}>
              {valuePlaceholder}
            </Text>
          )}
          {serialValue ? (
            <Text style={BottomSheetModalStyles.serialSelectedBtnBottomSheet}>
              {serialValue}
            </Text>
          ) : serialPlaceholder ? (
            <Text style={BottomSheetModalStyles.serialBtnBottomSheet}>
              {serialPlaceholder}
            </Text>
          ) : null}
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
            <View
              onTouchStart={() => setShowModal(false)}
              style={BottomSheetModalStyles.bgCloseModal}
            />
            <View style={BottomSheetModalStyles.contentModal}>
              <View style={BottomSheetModalStyles.headerModal}>
                <Text style={BottomSheetModalStyles.titleModal}>{title}</Text>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <AntDesign name="close" size={25} color={Colors.black} />
                </TouchableOpacity>
              </View>
              <ScrollView style={BottomSheetModalStyles.optionsContainer}>
                {title === Strings.field && options === undefined && (
                  <Text style={BottomSheetModalStyles.selectFarmTxt}>
                    {Strings.selectFarm}
                  </Text>
                )}
                {options?.map(option => {
                  return (
                    <TouchableOpacity
                      onPress={() => selectOption(option)}
                      key={option?.id}
                      style={[
                        BottomSheetModalStyles.option,
                        option?.selected &&
                          BottomSheetModalStyles.selectedOption,
                      ]}>
                      <Text style={BottomSheetModalStyles.txtOption}>
                        {option?.name}
                      </Text>
                      {option?.selected && (
                        <AntDesign
                          name="check"
                          size={25}
                          color={Colors.black}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
