import {View, ScrollView, Text} from 'react-native';
import {SignInStyles} from './styles';
import Logo from '../../components/Logo';
import {Colors} from '../../themes/colors';
import Strings from '../../strings';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useState} from 'react';
import useSignInForm from '../../hooks/useSignInForm';
import useSignInRequest from '../../hooks/useSignInRequest';

export default function SignIn() {
  const {
    email,
    pwd,
    emailError,
    pwdError,
    isSubmitDisabled,
    onChangedEmail,
    onChangedPwd,
  } = useSignInForm();
  const {loading, handleLogin} = useSignInRequest();

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
          <Input
            placeholder={Strings.emailPlaceholder}
            type="email"
            autoCapitalize="none"
            isPwdInput={false}
            value={email}
            onChangeText={onChangedEmail}
            errorMsg={emailError}
            editable={!loading}
          />
          <Text style={SignInStyles.label}>{Strings.password}</Text>
          <Input
            isPwdInput={true}
            placeholder={Strings.passwordPlaceholder}
            autoCapitalize="none"
            value={pwd}
            onChangeText={onChangedPwd}
            errorMsg={pwdError}
            editable={!loading}
          />
          <Button
            onPress={() => handleLogin(email, pwd, 372)}
            loading={loading}
            disabled={isSubmitDisabled || loading}
            txt={Strings.signin}
            mt={40}
            w={'100%'}
          />
        </View>
      </ScrollView>
    </View>
  );
}
