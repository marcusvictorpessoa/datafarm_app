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

export default function StopRecord() {
  const {loading, getResources, resources} = useStopRecordRequests();

  useEffect(() => {
    getResources();
  }, []);
  return (
    <View style={StopRecordStyles.container}>
      {loading && <BackgroundSpinner />}
      <View style={StopRecordStyles.formContainer}>
        <ScrollView>
          <View style={StopRecordStyles.wrapperCol}>
            <Text style={StopRecordStyles.label}>{Strings.equipment}</Text>
            <BottomSheetModal />
          </View>
          <View style={StopRecordStyles.wrapperRow}>
            <View
              style={[StopRecordStyles.wrapperCol, StopRecordStyles.farmWidth]}>
              <Text style={StopRecordStyles.label}>{Strings.farm}</Text>
              <BottomSheetModal />
            </View>
            <View
              style={[
                StopRecordStyles.wrapperCol,
                StopRecordStyles.fieldWidth,
              ]}>
              <Text style={StopRecordStyles.label}>{Strings.field}</Text>
              <BottomSheetModal />
            </View>
          </View>
          <View style={StopRecordStyles.wrapperCol}>
            <Text style={StopRecordStyles.label}>{Strings.reason}</Text>
            <ListOfReasons reasons={resources?.resources?.reasons} />
          </View>
          <View style={StopRecordStyles.wrapperCol}>
            <View style={StopRecordStyles.wrapperRowNote}>
              <FontAwesome5 name="edit" size={25} color={Colors.quickSilver} />
              <Text style={StopRecordStyles.noteLabel}>{Strings.note}</Text>
            </View>
            <NoteInput />
          </View>
        </ScrollView>
      </View>
      <View style={StopRecordStyles.btnsContainer}>
        <TimeButton timeValue={10} />
        <Button
          onPress={() => {}}
          loading={false}
          disabled={false} // here using the form component hook
          txt={Strings.save}
          mt={0}
          w={150}
        />
      </View>
    </View>
  );
}
