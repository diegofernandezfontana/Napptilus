import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Card from '../Card';
import { Wrapper } from './styles';

const CardsList = props => {
  const { allOompaLoompas, onHandleRedirect } = props;

  const renderCards = () => {
    return allOompaLoompas.map(oompaLoompa => {
      return <Card oompaLoompa={oompaLoompa} key={oompaLoompa.name} onHandleRedirect={onHandleRedirect} />;
    });
  };

  return (
    <Wrapper>
      <h1>Soy la cards list</h1>
      {renderCards()}
    </Wrapper>
  );
};

CardsList.propTypes = {
  allOompaLoompas: PropTypes.array,
};

export default withRouter(CardsList);
