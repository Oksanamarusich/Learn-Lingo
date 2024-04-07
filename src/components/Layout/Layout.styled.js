import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background-color:  ${({ theme }) => theme.colors.primaryBgColor};

  @media only screen and (min-width: 375px) {
    max-width: 375px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
