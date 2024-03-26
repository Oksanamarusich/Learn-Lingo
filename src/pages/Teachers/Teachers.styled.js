import { styled } from 'styled-components';

export const StyledMain = styled.main`
  padding: 96px 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height:100vh; */
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
`;
