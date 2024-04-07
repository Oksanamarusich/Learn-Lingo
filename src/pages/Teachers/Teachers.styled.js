import { styled } from 'styled-components';

export const StyledMain = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
`;

export const StyledSection = styled.section`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  @media only screen and (min-width: 1440px) {
    padding: 0 128px 96px 128px;
  }
`;
