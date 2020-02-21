import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import PropTypes from 'prop-types';

const Input = ({
  onChange, disabled, placeholder, value, type, name, className,
}) => (
  <div className={classNames('input-wrapper', disabled && 'disabled', className)}>
    <input
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={(event) => onChange(event.target.value)}
      disabled={disabled}
      name={name}
    />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Input;
