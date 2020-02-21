import {
  takeLatest, call, put,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
  weatherActionsType,
  getWeatherSuccess,
} from '../actions/weather';
import weatherService from '../api/weather';

function* getWeather({ payload }) {
  try {
    const { coords } = payload;
    const result = yield call(weatherService.getWeather, {
      lat: coords.latitude,
      lon: coords.longitude,
      appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
    });

    yield put(getWeatherSuccess(result.data));
  } catch (e) {

  }
}


function* registerWatcher() {
  yield takeLatest(weatherActionsType.GET_WEATHER, getWeather);
}

export default registerWatcher;
