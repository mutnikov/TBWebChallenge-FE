import { weatherActionsType } from '../actions/weather';

const DEFAULT_STATE = null;

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case weatherActionsType.GET_WEATHER_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
