import { combineReducers } from 'redux';
import user from './user';
import weather from './weather';
import news from './news';
import sport from './sport';
import task from './task';
import photo from './photo';

export default combineReducers({
  weather,
  user,
  news,
  sport,
  task,
  photo,
});
