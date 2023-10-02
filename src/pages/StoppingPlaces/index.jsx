import {View, Text, ScrollView} from 'react-native';
import {StoppingPlacesStyles} from './styles';

import FilterInput from '../../components/FilterInput';
import RegisterCard from '../../components/RegisterCard';
import useStoppingPlaces from '../../hooks/useStoppingPlaces';
import Strings from '../../strings';

export default function StoppingPlaces() {
  const {registers, filter, setFilter} = useStoppingPlaces();
  return (
    <View style={StoppingPlacesStyles.container}>
      <FilterInput value={filter} onChange={setFilter} />
      <ScrollView style={StoppingPlacesStyles.contentCard}>
        {registers?.length === 0 && <Text style={StoppingPlacesStyles.registersNotFound}>{Strings.RegistersNotFound}</Text>}
        {registers.map(item => {
          return (
            <RegisterCard
              key={item?.uuid}
              farmName={item?.name_farm}
              typeReason={item?.name_reason}
              datetime={item?.created_at}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
