import React from 'react';
import { Provider } from 'react-redux';

import configStore from './Store/configStore';
import sagas from './sagas/index';
import MainRouter from './Router';

const store = configStore();
store.runSaga(sagas);

const App = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

export default App;
