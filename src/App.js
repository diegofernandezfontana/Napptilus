import React from 'react';

import configStore from './Store/configStore';
import sagas from './sagas/index';

import CardsList from './Components/CardsList';
import Router from './Router';
const store = configStore();

store.runSaga(sagas);

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
