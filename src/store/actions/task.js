export const taskActionsType = {
  GET_TASK_LIST: 'GET_TASK_LIST',
  GET_TASK_LIST_SUCCESS: 'GET_TASK_LIST_SUCCESS',

  CREATE_NEW_TASK: 'CREATE_NEW_TASK',
  CHANGE_TASK: 'CHANGE_TASK',
};

export const getTasksList = () => ({
  type: taskActionsType.GET_TASK_LIST,
});

export const getTasksListSuccess = (payload) => ({
  type: taskActionsType.GET_TASK_LIST_SUCCESS,
  payload,
});

export const createNewTask = (payload) => ({
  type: taskActionsType.CREATE_NEW_TASK,
  payload,
});

export const changeTask = (payload) => ({
  type: taskActionsType.CHANGE_TASK,
  payload,
});
