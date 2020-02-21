import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ isChecked, onChange }) => (
  <div className="checkbox-container" onClick={onChange}>
    <input type="checkbox" checked={isChecked} />
    <span className="checkmark" />
  </div>
);

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};


export default Checkbox;
