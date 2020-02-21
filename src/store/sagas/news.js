import {
  takeLatest, call, put,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
  newsActionsType,
  getAllNewsSuccess,
} from '../actions/news';
import newsService from '../api/news';

function* getAllNews() {
  try {
    const result = yield call(newsService.getAllNews);
    yield put(getAllNewsSuccess({
      item: result.items[0],
      image: result.image,
      description: result.description,
    }));
  } catch (e) {

  }
}


function* registerWatcher() {
  yield takeLatest(newsActionsType.GET_ALL_NEWS, getAllNews);
}

export default registerWatcher;
