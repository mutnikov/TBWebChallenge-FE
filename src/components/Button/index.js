import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled, title }) => (
  <div className={classNames('button-wrapper', disabled && 'disabled')} onClick={onClick}>
    <div className="button-text">{title}</div>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};


export default Button;
