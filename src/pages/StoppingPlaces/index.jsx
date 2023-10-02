import {View} from 'react-native';
import {useEffect} from 'react';
import {find} from '../../services/database/querys';

export default function StoppingPlaces() {
  async function getData() {
    const pro = await find(1);
    console.log('query S2: ', pro);
  }
  useEffect(() => {
    getData();
  }, []);
  return <View></View>;
}
