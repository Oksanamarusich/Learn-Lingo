import { styled } from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 10px 20px;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  };
  @media only screen and (min-width: 1440px) {
    padding: 10px 68px;
  };
  
`;
