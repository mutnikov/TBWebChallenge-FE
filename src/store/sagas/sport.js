import {
  takeLatest, call, put, select,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
  sportActionsType,
  getSportDataSuccess,
  getBeatedTeamsSuccess,
} from '../actions/sport';
import sportService from '../api/sport';

const getToken = (state) => state.user.token;

function* getSportData({}) {
  try {
    const token = yield select(getToken);
    const result = yield call(sportService.getSportData, token);
    yield put(getSportDataSuccess(result.data));
  } catch (e) {

  }
}

function* getBeatedTeams({ payload }) {
  try {
    const token = yield select(getToken);
    const { commandName } = payload;
    const result = yield call(sportService.getBeatedTeams, commandName, token);

    yield put(getBeatedTeamsSuccess(result.data));
  } catch (e) {

  }
}


function* registerWatcher() {
  yield takeLatest(sportActionsType.GET_SPORT_DATA, getSportData);
  yield takeLatest(sportActionsType.GET_BEATED_TEAMS, getBeatedTeams);
}

export default registerWatcher;
