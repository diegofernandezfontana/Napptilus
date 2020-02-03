import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SearchInput } from './styles';

const SearchBar = props => {
  const { onHandleSubmit, onChange, searchValue } = props;

  const handleChange = event => {
    const searchValues = event.target.value;

    onChange(searchValues);
  };

  return (
    <SearchInput
      value={searchValue}
      placeholder="Search recipies by ingredients (comma separated)"
      type="text"
      onChange={handleChange}
      data-testid="searchbar-input"
    />
  );
};

SearchBar.propTypes = {
  onHandleSubmit: PropTypes.func,
};

export default SearchBar;
