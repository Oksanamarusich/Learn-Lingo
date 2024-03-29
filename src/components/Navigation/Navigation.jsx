import { UkraineIcon } from 'components/icons/UkraineIcon';
import { useAuth } from 'hooks/useAuth';
import {
  ContainerLogo,
  ContainerNavigation,
  NavigationList,
  StyledLink,
  StyledNavLink,
} from './Navigation.styled';

export const Navigation = () => {
  const { token } = useAuth();
  return (
    <ContainerNavigation>
      <ContainerLogo>
        <UkraineIcon />
        <StyledLink to="/">LearnLingo</StyledLink>
      </ContainerLogo>

      <NavigationList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
       
        <li>
          <StyledNavLink to="/teachers">Teachers</StyledNavLink>
        </li>
        {token &&
          <li>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </li>}
      </NavigationList>
    </ContainerNavigation>
  );
};
