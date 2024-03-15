import { UkraineIcon } from 'components/icons/UkraineIcon';
import {
  ContainerLogo,
  ContainerNavigation,
  NavigationList,
  StyledLink,
  StyledNavLink,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <ContainerNavigation>
      <ContainerLogo>
        <UkraineIcon/>
        <StyledLink>LearnLingo</StyledLink>
      </ContainerLogo>

      <NavigationList>
        <li>
          <StyledNavLink>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink>Teachers</StyledNavLink>
        </li>
      </NavigationList>
    </ContainerNavigation>
  );
};
