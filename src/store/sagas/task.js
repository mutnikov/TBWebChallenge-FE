import {
  takeLatest, call, put, select,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
  taskActionsType,
  getTasksListSuccess,
  getTasksList,
} from '../actions/task';
import taskService from '../api/task';

const getToken = (state) => state.user.token;


function* getAllTasks() {
  try {
    const token = yield select(getToken);
    const result = yield call(taskService.getAllTask, token);
    yield put(getTasksListSuccess(result.data));
  } catch (e) {

  }
}

function* createTask({ payload }) {
  try {
    const token = yield select(getToken);
    yield call(taskService.createTask, payload, token);
    yield put(getTasksList());
  } catch (e) {

  }
}

function* changeTask({ payload }) {
  try {
    const token = yield select(getToken);
    yield call(taskService.changeTask, payload.id, payload, token);
    yield put(getTasksList());
  } catch (e) {

  }
}


function* registerWatcher() {
  yield takeLatest(taskActionsType.GET_TASK_LIST, getAllTasks);
  yield takeLatest(taskActionsType.CREATE_NEW_TASK, createTask);
  yield takeLatest(taskActionsType.CHANGE_TASK, changeTask);
}

export default registerWatcher;
