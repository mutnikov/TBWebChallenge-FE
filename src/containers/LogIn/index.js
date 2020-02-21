import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import i18n from '../../utils/i18n';
import { Button, Input } from '../../components';
import './styles.scss';
import { login } from '../../store/actions/user';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';


const Login = ({ login, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    login({ email, password }, () => {
      console.log('history', history)
      history.push('/dashboard')});
  };
  return (
    <div className="login-page-wrapper">
      <div className="data-wrapper">
        <div className="login-title">{i18n.__('login.title')}</div>
        <div className="inputs-wrapper">
          <Input value={email} onChange={setEmail} placeholder={i18n.__('login.email')} />
          <Input value={password} type="password" onChange={setPassword} placeholder={i18n.__('login.password')} />
        </div>
        <div className="buttons-wrapper">
          <Button onClick={onSubmit} title={i18n.__('login.login')} />
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="sign-up-wrapper">
          {i18n.__('login.sign_up.title')}
          <Link to="/sign-up">
            {' '}
            {i18n.__('login.sign_up.action')}
          </Link>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  login: (data, callback) => dispatch(login(data, callback)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
