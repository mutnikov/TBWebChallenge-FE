import { all, fork } from 'redux-saga/effects';
import healthCheck from './healthCheck';
import user from './user';
import weather from './weather';
import news from './news';
import sport from './sport';
import task from './task';
import photo from './photo';

const sagas = [healthCheck, user, weather, news, sport, task, photo];

export default function* mainSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
