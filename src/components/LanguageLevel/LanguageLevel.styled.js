import { styled } from 'styled-components';

export const BlockLanguage = styled.ul`
  display: flex;
  gap: 8px;
`;

export const ButtonLevelActive = styled.button`
  border-radius: 35px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.buttonBgColor};
  border: 1px solid ${({ theme }) => theme.colors.buttonBgColor};

  font-family: var(--family);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14286;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const ButtonLevel = styled.button`
  border-radius: 35px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  border: 1px solid ${({ theme }) => theme.colors.before};

  font-family: var(--family);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14286;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  transition: background-color ${({ theme }) => theme.animation.transition};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
