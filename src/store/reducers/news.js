import { newsActionsType } from '../actions/news';

const DEFAULT_STATE = null;

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case newsActionsType.GET_ALL_NEWS_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
