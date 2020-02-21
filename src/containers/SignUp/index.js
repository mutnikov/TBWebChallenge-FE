import React, { useState } from 'react';
import i18n from '../../utils/i18n';
import { Button, Input, ImageUploader } from '../../components';
import './styles.scss';
import { signUp } from '../../store/actions/user';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
const SignUp = ({ signUp, history }) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = () => {
    if ((password === confirmPassword) && email && userName) {
      signUp({
        email, password, userName,
      }, () => alert(i18n.__('registred.success')));
      history.push('/login');
    }
  };

  return (
    <div className="sing-up-wrapper">
      <div className="login-title">{i18n.__('sign_up.title')}</div>
      <div className="inputs-wrapper">
        <Input value={userName} onChange={setUserName} placeholder={i18n.__('sign_up.user_name')} />
        <Input value={email} onChange={setEmail} placeholder={i18n.__('sign_up.email')} />
      </div>
      <div className="inputs-wrapper">
        <Input value={password} onChange={setPassword} type="password" placeholder={i18n.__('sign_up.password')} />
        <Input value={confirmPassword} onChange={setConfirmPassword} type="password" placeholder={i18n.__('sign_up.confirm_password')} />
      </div>
      <div className="buttons-wrapper">
        <Button onClick={onSubmit} title={i18n.__('sign_up.sign_up')} />
      </div>
    </div>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});
const mapDispatchToProps = (dispatch) => ({
  signUp: (data, callback) => dispatch(signUp(data, callback)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
