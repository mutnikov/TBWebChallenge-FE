import { taskActionsType } from '../actions/task';

const DEFAULT_STATE = null;

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case taskActionsType.GET_TASK_LIST_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
