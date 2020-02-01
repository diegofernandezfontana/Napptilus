import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../Pages/Main';
import UmpaLumpaProfile from '../Pages/UmpaLumpaProfile';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <UmpaLumpaProfile />
        </Route>
        <Route path="/*">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
