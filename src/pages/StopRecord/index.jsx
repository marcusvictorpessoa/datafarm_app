import {View, Text, ScrollView} from 'react-native';
import {StopRecordStyles} from './styles';
import {useEffect} from 'react';
import useStopRecordRequests from '../../hooks/useStopRecordRequests';
import BackgroundSpinner from '../../components/BackgroundSpinner';
import Button from '../../components/Button';
import Strings from '../../strings';
import TimeButton from '../../components/TimeButton';
import BottomSheetModal from '../../components/BottomSheetModal';
import ListOfReasons from '../../components/ListOfReasons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {Colors} from '../../themes/colors';
import NoteInput from '../../components/NoteInput';
import useStopRecordForm from '../../hooks/useStopRecordForm';

export default function StopRecord() {
  const {loading, getResources} = useStopRecordRequests();
  const {
    loadingForm,
    equipments,
    farms,
    fields,
    reasons,
    initFormOptionsValues,
    equipmentSelected,
    farmSelected,
    fieldSelected,
    reasonSelected,
    minutes,
    note,
    changeEquipment,
    changeFarm,
    changeField,
    changeReason,
    plusMinutes,
    minusMinutes,
    changeNote,
    isSaveBtnDisable,
    submitForm,
  } = useStopRecordForm();

  async function setResources() {
    const resources = await getResources();
    initFormOptionsValues(
      resources?.machineries,
      resources?.farms,
      resources?.reasons,
    );
  }

  useEffect(() => {
    setResources();
  }, []);

  return (
    <View style={StopRecordStyles.container}>
      {loading && <BackgroundSpinner />}
      <View style={StopRecordStyles.formContainer}>
        <ScrollView>
          <View style={StopRecordStyles.wrapperCol}>
            <Text style={StopRecordStyles.label}>{Strings.equipment}</Text>
            <BottomSheetModal
              title={Strings.equipment}
              value={equipmentSelected?.name}
              serialValue={equipmentSelected?.serialNumber}
              options={equipments}
              selectValue={changeEquipment}
              valuePlaceholder={Strings.equipmentPlaceholder}
              serialPlaceholder={Strings.serialNumberPlaceholder}
              isDisable={loading}
            />
          </View>
          <View style={StopRecordStyles.wrapperRow}>
            <View
              style={[StopRecordStyles.wrapperCol, StopRecordStyles.farmWidth]}>
              <Text style={StopRecordStyles.label}>{Strings.farm}</Text>
              <BottomSheetModal
                title={Strings.farm}
                value={farmSelected?.name}
                selectValue={changeFarm}
                options={farms}
                valuePlaceholder={Strings.farmPlaceholder}
                isDisable={loading}
              />
            </View>
            <View
              style={[
                StopRecordStyles.wrapperCol,
                StopRecordStyles.fieldWidth,
              ]}>
              <Text style={StopRecordStyles.label}>{Strings.field}</Text>
              <BottomSheetModal
                title={Strings.field}
                value={fieldSelected?.name}
                selectValue={changeField}
                options={fields}
                valuePlaceholder={Strings.fieldPlaceholder}
                isDisable={loading}
              />
            </View>
          </View>
          <View style={StopRecordStyles.wrapperCol}>
            <Text style={StopRecordStyles.label}>{Strings.reason}</Text>
            <ListOfReasons reasons={reasons} selectedReason={changeReason} />
          </View>
          <View style={StopRecordStyles.wrapperCol}>
            <View style={StopRecordStyles.wrapperRowNote}>
              <FontAwesome5 name="edit" size={25} color={Colors.quickSilver} />
              <Text style={StopRecordStyles.noteLabel}>{Strings.note}</Text>
            </View>
            <NoteInput edit={!loading} value={note} change={changeNote} />
          </View>
        </ScrollView>
      </View>
      <View style={StopRecordStyles.btnsContainer}>
        <TimeButton
          timeValue={minutes}
          isDisabled={minutes === 0}
          handlePlus={plusMinutes}
          handleMinus={minusMinutes}
        />
        <Button
          onPress={() => submitForm()}
          loading={loadingForm}
          disabled={isSaveBtnDisable || loadingForm}
          txt={Strings.save}
          mt={0}
          w={150}
        />
      </View>
    </View>
  );
}
