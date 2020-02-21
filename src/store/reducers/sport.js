import { sportActionsType } from '../actions/sport';

const DEFAULT_STATE = {
  firstTeam: null,
  beatedTeams: null,
};

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case sportActionsType.GET_SPORT_DATA_SUCCESS: {
      return { ...state, firstTeam: action.payload };
    }
    case sportActionsType.GET_BEATED_TEAMS__SUCCESS: {
      return { ...state, beatedTeams: action.payload };
    }
    case sportActionsType.RESET_BEATED_TEAMS: {
      return { ...state, beatedTeams: null };
    }
    default:
      return state;
  }
};
