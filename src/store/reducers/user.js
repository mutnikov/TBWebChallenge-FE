import { userActionsType } from '../actions/user';

const DEFAULT_STATE = null;

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case userActionsType.LOGIN_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
