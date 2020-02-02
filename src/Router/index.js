import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getLshToState } from '../Global/actions';
import Navbar from '../Components/Navbar';
import Main from '../Pages/Main';
import UmpaLumpaProfile from '../Pages/UmpaLumpaProfile';

const MainRouter = props => {
  const { onGetLshToState } = props;

  useEffect(() => {
    onGetLshToState();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/:id" component={UmpaLumpaProfile} />
      <Route exact path="/" component={Main} />
    </BrowserRouter>
  );
};

const mapDispatchToProps = dispatch => ({
  onGetLshToState: () => {
    dispatch(getLshToState());
  },
});

export default connect(null, mapDispatchToProps)(MainRouter);
