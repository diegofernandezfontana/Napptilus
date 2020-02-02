import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectSelectedOompaLoompa, selectIsLoadingInit } from '../Main/selectors';

import { Wrapper, ProfileImage, ProfileTitle } from './styles';
import { getSelectedOompaLoompaById } from '../Main/actions';

const UmpaLumpaProfile = props => {
  const { selectedOompaLoompa, onGetSelectedOompaLoompaById, isLoadingInit } = props;

  useEffect(() => {
    if (!isLoadingInit && !Object.keys(selectedOompaLoompa).length) {
      const {
        match: {
          params: { id },
        },
      } = props;

      onGetSelectedOompaLoompaById({ id });
    }
  }, [isLoadingInit]);

  const renderProfileInfo = () => {
    if (!isLoadingInit && Object.keys(selectedOompaLoompa).length) {
      const { first_name, last_name, gender, profession } = selectedOompaLoompa;

      return (
        <Fragment>
          <h1>{first_name}</h1>
          <h1>{last_name}</h1>
          <h1>{gender}</h1>
          <h1>{profession}</h1>
        </Fragment>
      );
    }

    return null;
  };

  const renderProfile = () => {
    if (isLoadingInit) {
      return <h1> Loading....</h1>;
    }

    return (
      <Wrapper>
        <ProfileImage />
        <ProfileTitle>{renderProfileInfo()}</ProfileTitle>
      </Wrapper>
    );
  };

  return renderProfile();
};

const mapDispatchToProps = dispatch => ({
  onGetSelectedOompaLoompaById: ({ id }) => {
    dispatch(getSelectedOompaLoompaById({ id }));
  },
});

const mapStateToProps = createStructuredSelector({
  selectedOompaLoompa: selectSelectedOompaLoompa(),
  isLoadingInit: selectIsLoadingInit(),
});

UmpaLumpaProfile.propTypes = {
  selectedOompaLoompa: PropTypes.object,
  onGetSelectedOompaLoompaById: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UmpaLumpaProfile));
