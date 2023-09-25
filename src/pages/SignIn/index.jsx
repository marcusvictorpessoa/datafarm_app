import {View, ScrollView, Text} from 'react-native';
import {SignInStyles} from './styles';
import Logo from '../../components/Logo';
import {Colors} from '../../themes/colors';
import Strings from '../../strings';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SignIn() {
  return (
    <View style={SignInStyles.container}>
      <ScrollView>
        <View style={SignInStyles.logoWrapper}>
          <Logo
            logo_with={'100%'}
            logo_height={80}
            logo_color={Colors.jet}
            container_flex={1}
            container_width={'100%'}
            container_height={'100%'}
            mt={70}
          />
        </View>
        <View style={SignInStyles.contentWrapper}>
          <Text style={SignInStyles.login}>{Strings.login}</Text>
          <Text style={SignInStyles.info}>{Strings.accessTheApp}</Text>
          <Text style={SignInStyles.label}>{Strings.email}</Text>
          <Input type="email" autoCapitalize="none" />
          <Text style={SignInStyles.label}>{Strings.password}</Text>
          <Input secureTextEntry autoCapitalize="none" isRightIcon={true} >
          </Input>
          <Button txt={Strings.signin} mt={40} />
        </View>
      </ScrollView>
    </View>
  );
}
