import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {ListOfReasonStyles} from './styles';

export default function ListOfReasons({reasons}) {
  return (
    <ScrollView style={ListOfReasonStyles.container}>
      {reasons?.map(reason => {
        return (
          <TouchableOpacity style={ListOfReasonStyles.reason} key={reason?.id}>
            <Text>ico</Text>
            <Text style={ListOfReasonStyles.txtReason}>{reason?.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
