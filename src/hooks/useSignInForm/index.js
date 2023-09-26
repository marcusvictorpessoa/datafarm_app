import {useState, useEffect} from 'react';
import {validateEmail, validatePassword} from '../../utils/validators';

export default function useSignInForm() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const [emailError, setEmailError] = useState('');
  const [pwdError, setPwdError] = useState('');

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  useEffect(() => {
    if (email.length > 0 && pwd.length > 0 && !emailError && !pwdError) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [email, pwd, emailError, pwdError]);

  const onChangedEmail = value => {
    const {msg} = validateEmail(value.trim());
    setEmail(value.trim());
    setEmailError(msg);
  };
  const onChangedPwd = value => {
    const {msg} = validatePassword(value.trim());
    setPwd(value.trim());
    setPwdError(msg);
  };

  return {
    email,
    pwd,
    emailError,
    pwdError,
    isSubmitDisabled,
    onChangedEmail,
    onChangedPwd,
  };
}
