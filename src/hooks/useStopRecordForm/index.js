import {useEffect, useState} from 'react';
import {insertData} from '../../services/database/querys';
import 'react-native-get-random-values';
import {v4 as uuid4} from 'uuid';
import Geolocation from '@react-native-community/geolocation';

export default function useStopRecordForm() {
  const [loadingForm, setLoadingForm] = useState(false);
  const [equipments, setEquipments] = useState([]);
  const [farms, setFarms] = useState([]);
  const [fields, setFields] = useState([]);
  const [reasons, setReasons] = useState([]);

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [equipmentSelected, setEquipmentSelected] = useState({
    id: 0,
    name: '',
    serialNumber: '',
  });

  const [farmSelected, setFarmSelected] = useState({
    id: 0,
    name: '',
  });

  const [fieldSelected, setFieldSelected] = useState({
    id: 0,
    name: '',
  });

  const [reasonSelected, setReasonSelected] = useState({
    id: 0,
    name: '',
  });

  const [minutes, setMinutes] = useState(10);

  const [note, setNote] = useState(null);

  const [isSaveBtnDisable, setIsSaveBtnDisable] = useState(true);

  function handleSelectedOption(optionsValues, valueSelectedOption) {
    const filteredValues = optionsValues?.filter(value => {
      if (value?.id === valueSelectedOption?.id) {
        value.selected = true;
        return value;
      } else {
        value.selected = false;
        return value;
      }
    });

    return filteredValues;
  }

  function getLocation() {
    Geolocation.getCurrentPosition(info =>
      setLocation({
        latitude: info.coords?.latitude,
        longitude: info.coords?.longitude,
      }),
    );
  }

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const filteredEquipments = handleSelectedOption(
      equipments,
      equipmentSelected,
    );
    setEquipments(filteredEquipments);
  }, [equipmentSelected]);

  useEffect(() => {
    const filteredFarms = handleSelectedOption(farms, farmSelected);
    setFarms(filteredFarms);
    setFields(farmSelected?.fields);
    setFieldSelected({
      id: 0,
      name: '',
    });
  }, [farmSelected]);

  useEffect(() => {
    const filteredFields = handleSelectedOption(fields, fieldSelected);
    setFields(filteredFields);
  }, [fieldSelected]);

  useEffect(() => {
    const filteredReasons = handleSelectedOption(reasons, reasonSelected);
    setReasons(filteredReasons);
  }, [reasonSelected]);

  useEffect(() => {
    if (
      equipmentSelected?.name.trim() !== '' &&
      farmSelected?.name.trim() !== '' &&
      fieldSelected?.name.trim() !== '' &&
      reasonSelected?.name.trim() !== 0 &&
      minutes > 0
    ) {
      setIsSaveBtnDisable(false);
    } else {
      setIsSaveBtnDisable(true);
    }
  }, [equipmentSelected, farmSelected, fieldSelected, reasonSelected, minutes]);

  function initFormOptionsValues(
    equipments_options,
    farms_options,
    reasons_options,
  ) {
    setEquipments(equipments_options);
    setFarms(farms_options);
    setReasons(reasons_options);
  }

  function changeEquipment(equipment) {
    setEquipmentSelected(equipment);
  }
  function changeFarm(farm) {
    setFarmSelected(farm);
  }
  function changeField(field) {
    setFieldSelected(field);
  }
  function changeReason(reason) {
    setReasonSelected(reason);
  }

  function plusMinutes() {
    setMinutes(old => old + 1);
  }

  function minusMinutes() {
    setMinutes(old => old - 1);
  }

  function changeNote(txt) {
    setNote(txt);
  }

  function clearFormFields() {
    setEquipmentSelected({
      id: 0,
      name: '',
      serialNumber: '',
    });

    setFarmSelected({
      id: 0,
      name: '',
    });

    setFieldSelected({
      id: 0,
      name: '',
    });

    setReasonSelected({
      id: 0,
      name: '',
    });

    setMinutes(10);

    setNote(null);

    setLocation({
      latitude: 0,
      longitude: 0,
    });
  }

  async function submitForm() {
    setLoadingForm(true);
    try {
      const form = {
        uuid: uuid4(),
        note: note,
        idFarm: farmSelected?.id,
        idField: fieldSelected?.id,
        idReason: reasonSelected?.id,
        idMachinery: equipmentSelected?.id,
        minutes: minutes,
        longitude: location?.longitude,
        latitude: location?.latitude,
        farmName: farmSelected?.name,
        reasonName: reasonSelected?.name,
        createdAt: new Date().toString(),
      };

      await insertData(form);

      clearFormFields();
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingForm(false);
    }
  }

  return {
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
  };
}
