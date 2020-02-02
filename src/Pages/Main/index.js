import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CardsList from '../../Components/CardsList';
import { useInfiniteScroll } from '../../utils/useInfiniteScroll';

import { getOompaLoompaRequest, setSelectedOompaLoompa } from './actions';
import { selectCurrentPage, selectAllOompaLoompas } from './selectors';

const MainPage = props => {
  const { itemRef, isDisplayed } = useInfiniteScroll();
  const { onGetOompaLoompaRequest, allOompaLoompas, onSetSelectedOompaLoompa } = props;

  useEffect(() => {
    if (isDisplayed) {
      onGetOompaLoompaRequest();
    }
  }, [isDisplayed]);

  const handleRedirect = oompaLoompa => () => {
    const { history } = props;

    onSetSelectedOompaLoompa({ oompaLoompa });
    history.push('/2');
  };

  return (
    <Fragment>
      <h1>Main Page</h1>
      <CardsList allOompaLoompas={allOompaLoompas} onHandleRedirect={handleRedirect} />
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
  onSetSelectedOompaLoompa: ({ oompaLoompa }) => {
    dispatch(setSelectedOompaLoompa({ oompaLoompa }));
  },
});

MainPage.propTypes = {
  currentPage: PropTypes.number,
  onGetOompaLoompaRequest: PropTypes.func,
  onSetSelectedOompaLoompa: PropTypes.func,
  allOompaLoompas: PropTypes.array,
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));
