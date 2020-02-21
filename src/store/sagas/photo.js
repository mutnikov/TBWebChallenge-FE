import {
  takeLatest, call, put, select,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
  photoActionsType,
  getAllPhotosSuccess,
  getAllPhotos,
} from '../actions/photo';
import photoService from '../api/photo';

const getToken = (state) => state.user.token;

function* loadPhoto({ payload }) {
  try {
    const token = yield select(getToken);


    const formData = new FormData();
    formData.append('image', payload.file);

    yield call(photoService.loadPhoto, formData, token, { 'Content-Type': 'application/x-www-form-urlencoded' });

    yield put(getAllPhotos());
  } catch (e) {

  }
}

function* getAllPhotosSaga({ payload }) {
  try {
    const token = yield select(getToken);
    const result = yield call(photoService.getAllPhotos, token);
    yield put(getAllPhotosSuccess(result.data));
  } catch (e) {

  }
}

function* registerWatcher() {
  yield takeLatest(photoActionsType.LOAD_PHOTO, loadPhoto);
  yield takeLatest(photoActionsType.GET_ALL_PHOTOS, getAllPhotosSaga);
}

export default registerWatcher;
