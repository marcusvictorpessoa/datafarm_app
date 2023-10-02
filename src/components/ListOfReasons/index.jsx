import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {ListOfReasonStyles} from './styles';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../themes/colors';

export default function ListOfReasons({reasons, selectedReason}) {
  return (
    <ScrollView style={ListOfReasonStyles.container}>
      {reasons?.map(reason => {
        return (
          <TouchableOpacity
            onPress={() => selectedReason(reason)}
            style={[
              ListOfReasonStyles.reason,
              reason?.selected && ListOfReasonStyles.selectedReason,
            ]}
            key={reason?.id}>
            <Svg width={40} height={40}>
              <Path
                x={7}
                y={7}
                d={reason?.icon}
                fill={Colors.quickSilver}
                scale={0.025}
              />
            </Svg>
            <Text style={ListOfReasonStyles.txtReason}>{reason?.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
