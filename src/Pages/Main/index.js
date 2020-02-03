import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CardsList from '../../Components/CardsList';
import { useInfiniteScroll } from '../../utils/useInfiniteScroll';
import SearchBar from '../../Components/SearchBar';

import { getOompaLoompaRequest, setSelectedOompaLoompa } from './actions';
import { selectCurrentPage, selectAllOompaLoompas } from './selectors';

const MainPage = props => {
  const { itemRef, isDisplayed } = useInfiniteScroll();
  const { onGetOompaLoompaRequest, allOompaLoompas, onSetSelectedOompaLoompa } = props;
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (isDisplayed) {
      onGetOompaLoompaRequest();
    }
  }, [isDisplayed]);

  const handleRedirect = oompaLoompa => () => {
    const { history } = props;
    const { id } = oompaLoompa;
    onSetSelectedOompaLoompa({ oompaLoompa });
    history.push(`/${id}`);
  };

  const handleSearch = inputValue => {
    setSearchValue(inputValue);
  };

  return (
    <Fragment>
      <h1>Main Page</h1>
      <br />
      <SearchBar searchValue={searchValue} onChange={handleSearch} />
      <br />
      <CardsList allOompaLoompas={allOompaLoompas} onHandleRedirect={handleRedirect} filterValue={searchValue} />
      <footer ref={itemRef} />
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
