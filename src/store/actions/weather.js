export const weatherActionsType = {
  GET_WEATHER: 'GET_WEATHER',
  GET_WEATHER_SUCCESS: 'GET_WEATHER_SUCCESS',
};

export const getWeather = (payload) => ({
  type: weatherActionsType.GET_WEATHER,
  payload,
});

export const getWeatherSuccess = (payload) => ({
  type: weatherActionsType.GET_WEATHER_SUCCESS,
  payload,
});
