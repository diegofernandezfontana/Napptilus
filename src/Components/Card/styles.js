import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px solid red;
  height: 250px;
  width: 300px;
  box-sizing: border-box;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  object-fit: cover;
`;

export const CardImage = styled.img`
  max-width: 100%;
`;

export const CardInfo = styled.div`
  border: 2px solid blue;
`;
