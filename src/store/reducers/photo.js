import { photoActionsType } from '../actions/photo';

const DEFAULT_STATE = null;

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case photoActionsType.GET_ALL_PHOTOS__SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
