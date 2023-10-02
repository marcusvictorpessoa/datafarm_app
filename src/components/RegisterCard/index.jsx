import {View, Text} from 'react-native';

import Feather from 'react-native-vector-icons/dist/Feather';
import {Colors} from '../../themes/colors';
import {RegisterCardStyles} from './styles';
import moment from 'moment';

export default function RegisterCard({farmName, typeReason, datetime}) {
  return (
    <View style={RegisterCardStyles.card}>
      <Feather name="clock" size={40} color={Colors.quickSilver} />
      <View style={RegisterCardStyles.col1}>
        <Text style={RegisterCardStyles.farmName}>{farmName}</Text>
        <Text textBreakStrategy="simple" style={RegisterCardStyles.typeReason}>
          {typeReason}
        </Text>
      </View>
      <View style={RegisterCardStyles.col2}>
        <Text style={RegisterCardStyles.datetime}>
          {moment(new Date(datetime)).format('DD/MM/YYYY hh:mm A')}
        </Text>
      </View>
    </View>
  );
}
