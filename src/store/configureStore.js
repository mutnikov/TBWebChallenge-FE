import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import mainSaga from './sagas';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const whitelist = ['user'];


const persistConfig = {
  key: 'root',
  storage,
  whitelist,
};

export default () => {
  const middlewares = [
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV !== 'development') {
    middlewares.concat([logger]);
  }

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));

  sagaMiddleware.run(mainSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};
