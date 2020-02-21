import React, { useState } from 'react';
import classNames from 'classnames';
import './styles.scss';
import PropTypes from 'prop-types';
import { Input, Checkbox } from '..';

const TaskRow = ({ task, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onChangeItemTitle = (value) => {
    onChange({ ...task, title: value });
  };

  const onTogleCheck = () => {
    onChange({ ...task, checked: !task.checked });
  };

  return (
    <div className="row-wrapper" onClick={() => setIsEditing(!isEditing)}>
      {
            isEditing ? <Input value={task.description} onChange={onChangeItemTitle} /> : <StaticText title={task.description} />
        }
      <div className="checkbox">
        <Checkbox isChecked={task.checked} onChange={onTogleCheck} />
      </div>
    </div>
  );
};

const StaticText = ({ title }) => (
  <div className="static-text-wrapper">
    {title}
  </div>
);


TaskRow.propTypes = {
  onChange: PropTypes.func.isRequired,
  task: PropTypes.shape({}).isRequired,
};


export default TaskRow;
