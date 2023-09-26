import Strings from '../strings';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = email => {
  if (!email) {
    return {
      status: false,
      msg: Strings.thisFieldIsRequired,
    };
  }

  if (!emailRegex.test(email)) {
    return {
      status: false,
      msg: Strings.enterAValidEmailAddress,
    };
  }

  return {status: true, msg: ''};
};

const validatePassword = pass => {
  if (!pass) {
    return {
      status: false,
      msg: Strings.thisFieldIsRequired,
    };
  }

  return {status: true, msg: ''};
};

export {validateEmail, validatePassword};
