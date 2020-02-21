import {
  takeLatest, call,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
  healthCheckActionsType,
} from '../actions/healthCheck';
import healthCheckService from '../api/healthCheck';

function* checkHealth() {
  try {
    yield call(healthCheckService.healthCheck);
  } catch (e) {

  }
}
function* registerWatcher() {
  yield takeLatest(healthCheckActionsType.HEALTH_CHECK, checkHealth);
}

export default registerWatcher;
