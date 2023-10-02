import {useState, useEffect} from 'react';
import {getAllData} from '../../services/database/querys';
import {useIsFocused} from '@react-navigation/native';

export default function useStoppingPlaces() {
  const [registers, setRegisters] = useState([]);
  const [filter, setFilter] = useState('');

  const focused = useIsFocused();

  async function getData() {
    const result = await getAllData();
    setRegisters(result);
  }
  useEffect(() => {
    if (focused) {
      getData();
    }
  }, [focused]);

  return {
    registers,
    filter,
    setFilter,
  };
}
