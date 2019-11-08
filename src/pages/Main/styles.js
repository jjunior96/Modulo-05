import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : '#fff')};
  font-family: Arial, Helvetica, sans-serif;

  span {
    font-size: 12px;
    color: #333;
  }
`;
