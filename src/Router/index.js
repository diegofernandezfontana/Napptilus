import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../Pages/Main';
import UmpaLumpaProfile from '../Pages/UmpaLumpaProfile';

const MainRouter = () => {
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
};

export default MainRouter;
