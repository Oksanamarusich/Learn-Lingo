import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const ContainerNavigation = styled.div`
  padding: 10px 0;

  @media only screen and (min-width: 768px) {
    margin-right: 38px;
    display: flex;
    gap: 68px;
  }
  @media only screen and (min-width: 1440px) {
    margin-right: 268px;
    gap: 390px;
    width: 661px;
  }
`;
export const ContainerLogo = styled.div`
  padding: 2px 0;
  margin-bottom: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 133px;
`;

export const StyledLink = styled(Link)`
  font-family: var(--family);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.secondaryTxtColor};
  cursor: pointer;
  transition: color ${({ theme }) => theme.animation.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export const NavigationList = styled.ul`
  padding: 4px 0;
  display: flex;
  justify-content: center;
  gap: 28px;
  width: 138px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: var(--family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.secondaryTxtColor};
  transition: color ${({ theme }) => theme.animation.transition};
  cursor: pointer;
  &.active {
    color: ${({ theme }) => theme.colors.buttonBgColor};
    text-decoration: underline;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
