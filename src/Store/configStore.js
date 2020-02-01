import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware, { END } from 'redux-saga';

import globalReducers from './';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enchancers = [applyMiddleware(sagaMiddleware)];

  const store = createStore(globalReducers, composeEnhancers(...enchancers));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
};

export default configStore;
