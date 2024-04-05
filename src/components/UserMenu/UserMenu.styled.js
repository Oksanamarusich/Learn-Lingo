import { styled } from 'styled-components';

export const UserMenuContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const ButtonLogIn = styled.button`
  padding: 14px 0;
  height: 48px;
  width: 73px;
  background-color: transparent;
  font-family: var(--family);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.buttonRegistration};
`;

export const ContainerButton = styled.li`
  display: flex;
  align-items: center;
`;

export const ButtonRegistration = styled.button`
  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.buttonRegistration};
  font-family: var(--family);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.primaryBgColor};
  white-space: nowrap;
`;
