import React, { useEffect, useState } from 'react';
import i18n from '../../utils/i18n';
import {
  TaskRow, IconManager, Input, Button,
} from '../../components';
import './styles.scss';
import { createNewTask, getTasksList, changeTask } from '../../store/actions/task';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

const Task = ({
  task, createNewTask, getTasksList, changeTask,
}) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const toggleAddMode = () => {
    setIsAddMode(!isAddMode);
    setNewTaskTitle('');
  };

  useEffect(() => {
    if (!task) {
      getTasksList();
    }
  });

  const onAddNewTask = () => {
    createNewTask({
      description: newTaskTitle,
      checked: false,
    });
    toggleAddMode();
  };

  const onChangeItem = (newItem) => {
    console.log('newItem', newItem);
    changeTask(newItem);
  };

  return (
    <div className="tasks-page-wrapper">
      <div className="tasks-page-header">
        <div className="tasks-page-header__title">{i18n.__('tasks.title')}</div>
      </div>
      <div className="tasks-page-body">
        {task && task.length > 0 ? task.map((task) => (
          <div className="tasks-page-body__element">
            <TaskRow task={task} onChange={onChangeItem} />
            {' '}
          </div>
        )) : (
          <div className="news-page-wrapper">
            <div className="no-data">
              {i18n.__('no-data')}
            </div>
          </div>
        )}
        <div className="tasks-page-body__plus">
          <div className="tasks-page-body__plus__icon" onClick={toggleAddMode}>
            <IconManager name="plus" />
          </div>
          {
                        isAddMode && (
                        <div className="tasks-page-body__plus__new">
                          <Input
                            className="tasks-page-body__plus__new__input"
                            value={newTaskTitle}
                            onChange={setNewTaskTitle}
                          />
                          <Button onClick={onAddNewTask} title={i18n.__('tasks.add')} />
                        </div>
                        )
                    }
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({}).isRequired,
  createNewTask: PropTypes.func.isRequired,
  getTasksList: PropTypes.func.isRequired,
  changeTask: PropTypes.func.isRequired,
};

const mapStateToProps = ({ task }) => ({
  task,
});
const mapDispatchToProps = (dispatch) => ({
  createNewTask: (data) => dispatch(createNewTask(data)),
  getTasksList: () => dispatch(getTasksList()),
  changeTask: (data) => dispatch(changeTask(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Task);
