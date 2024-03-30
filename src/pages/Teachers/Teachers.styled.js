import { styled } from 'styled-components';

export const StyledMain = styled.main`
background-color: ${({ theme }) => theme.colors.secondaryBgColor};
`;

export const StyledSection = styled.section`
  padding: 0 128px 96px 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
  
`;
