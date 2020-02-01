import React, { Fragment } from 'react';

import configStore from './Store/configStore';
import sagas from './sagas/index';

import MainRouter from './Router';

const store = configStore();

store.runSaga(sagas);

const App = () => {
  return (
    <Fragment>
      <MainRouter />
    </Fragment>
  );
};

export default App;
