import { LogInIcon } from 'components/icons/LogInIcon';
import {
  ButtonLogIn,
  ButtonRegistration,
  ContainerButton,
  UserMenuContainer,
} from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/auth/authSlice';

export const UserMenu = () => {
  const { isAuth} = useAuth();
  const dispatch = useDispatch();
 
  const handleClick = () => {
    dispatch(deleteUser());
  };

  return isAuth ? (
    <UserMenuContainer>
      <ButtonRegistration onClick={handleClick}>Log Out</ButtonRegistration>{' '}
    </UserMenuContainer>
  ) : (
    <UserMenuContainer>
      <ContainerButton>
        <LogInIcon />
        <ButtonLogIn>LogIn</ButtonLogIn>
      </ContainerButton>

      <li>
        <ButtonRegistration>Registration</ButtonRegistration>
      </li>
    </UserMenuContainer>
  );
};
