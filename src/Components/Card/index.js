import React from 'react';
import { withRouter } from 'react-router-dom';

import { Wrapper, CardImage, CardInfo, CardImageWrapper } from './styles';

const Card = props => {
  const { onHandleRedirect, history, oompaLoompa } = props;

  const renderName = () => {
    return `${oompaLoompa.first_name} ${oompaLoompa.last_name}`;
  };

  const renderGender = () => {
    return <h2> {oompaLoompa.gender === 'M' ? 'Male' : 'Women'}</h2>;
  };

  const renderProfession = () => {
    return <h3>{oompaLoompa.profession}</h3>;
  };

  return (
    <Wrapper onClick={onHandleRedirect(oompaLoompa)}>
      <CardImageWrapper>
        <CardImage src={oompaLoompa.image}></CardImage>
      </CardImageWrapper>
      <CardInfo>
        <h1>{renderName()}</h1>
        {renderGender()}
        {renderProfession()}
      </CardInfo>
    </Wrapper>
  );
};

export default withRouter(Card);
