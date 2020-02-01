import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import CardsList from '../../Components/CardsList';
import { useInfiniteScroll } from '../../utils/useInfiniteScroll';

import { getOompaLoompaRequest } from './actions';
import { selectCurrentPage, selectAllOompaLoompas } from './selectors';

const MainPage = props => {
  const { onGetOompaLoompaRequest, allOompaLoompas } = props;
  const { itemRef, isDisplayed } = useInfiniteScroll();

  useEffect(() => {
    if (isDisplayed) {
      onGetOompaLoompaRequest();
    }
  }, [isDisplayed]);

  return (
    <Fragment>
      <h1>Main Page</h1>
      <CardsList allOompaLoompas={allOompaLoompas} />

      <footer ref={itemRef}>loadMore</footer>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentPage(),
  allOompaLoompas: selectAllOompaLoompas(),
});

const mapDispatchToProps = dispatch => ({
  onGetOompaLoompaRequest: () => {
    dispatch(getOompaLoompaRequest());
  },
});

MainPage.propTypes = {
  currentPage: PropTypes.number,
  onGetOompaLoompaRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
