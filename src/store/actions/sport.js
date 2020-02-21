export const sportActionsType = {
  GET_SPORT_DATA: 'GET_SPORT_DATA',
  GET_SPORT_DATA_SUCCESS: 'GET_SPORT_DATA_SUCCESS',

  GET_BEATED_TEAMS: 'GET_BEATED_TEAMS',
  GET_BEATED_TEAMS__SUCCESS: 'GET_BEATED_TEAMS__SUCCESS',

  RESET_BEATED_TEAMS: 'RESET_BEATED_TEAMS',
};

export const getSportData = () => ({
  type: sportActionsType.GET_SPORT_DATA,
});

export const getBeatedTeams = (payload) => ({
  type: sportActionsType.GET_BEATED_TEAMS,
  payload,
});

export const resetBeatedTeams = () => ({
  type: sportActionsType.RESET_BEATED_TEAMS,
});

export const getBeatedTeamsSuccess = (payload) => ({
  type: sportActionsType.GET_BEATED_TEAMS__SUCCESS,
  payload,
});

export const getSportDataSuccess = (payload) => ({
  type: sportActionsType.GET_SPORT_DATA_SUCCESS,
  payload,
});
