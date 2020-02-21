import {
  takeLatest, call, put,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
  userActionsType,
  loginSuccess,
} from '../actions/user';
import userService from '../api/user';

function* login({ payload, callback }) {
  try {
    console.log('callback', callback)
    const result = yield call(userService.login, payload);
    callback && callback();
      console.log('sususuususussuusuusuususus')
    yield put(loginSuccess(result.data));
  } catch (e) {
      console.log('eeeeeee', e)
  }
}

function* signUp({callback,payload }) {
  try {
    yield call(userService.signUp, payload);

      callback && callback()
  } catch (e) {

  }
}

function* registerWatcher() {
  yield takeLatest(userActionsType.LOGIN, login);
  yield takeLatest(userActionsType.SIGN_UP, signUp);
}

export default registerWatcher;
