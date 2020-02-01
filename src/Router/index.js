import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Main from '../Pages/Main';
import UmpaLumpaProfile from '../Pages/UmpaLumpaProfile';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/:id" component={UmpaLumpaProfile} />
      <Route path="/*" component={Main} />
    </BrowserRouter>
  );
};

export default MainRouter;
