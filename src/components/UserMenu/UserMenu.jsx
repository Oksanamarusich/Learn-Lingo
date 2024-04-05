import Modal from 'react-modal';
import { LogInIcon } from 'components/icons/LogInIcon';
import {
  ButtonLogIn,
  ButtonRegistration,
  ContainerButton,
  UserMenuContainer,
} from './UserMenu.styled';

import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LogOut } from 'components/Logout/Logout';

export const UserMenu = () => {
  const { isAuth } = useAuth();
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);

  const openModalRegister = () => {
    setIsModalOpenRegister(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModalRegister = () => {
    setIsModalOpenRegister(false);
    document.body.style.overflow = '';
  };

  const openModalLogin = () => {
    setIsModalOpenLogin(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModalLogin = () => {
    setIsModalOpenLogin(false);
    document.body.style.overflow = '';
  };

  return isAuth ? (
    <UserMenuContainer>
      <ContainerButton>
        <LogInIcon />

        <ButtonLogIn onClick={openModalLogin}>LogIn</ButtonLogIn>
        <Modal
          isOpen={isModalOpenLogin}
          className="modal-content"
          overlayClassName="modal-overlay"
          contentLabel="Modal"
          onRequestClose={closeModalLogin}
        >
          <LoginForm onClose={closeModalLogin} />
        </Modal>
      </ContainerButton>

      <li>
        <LogOut />
      </li>
    </UserMenuContainer>
  ) : (
    <UserMenuContainer>
      <ContainerButton>
        <LogInIcon />

        <ButtonLogIn onClick={openModalLogin}>LogIn</ButtonLogIn>

        <Modal
          isOpen={isModalOpenLogin}
          className="modal-content"
          overlayClassName="modal-overlay"
          contentLabel="Modal"
          onRequestClose={closeModalLogin}
        >
          <LoginForm onClose={closeModalLogin} />
        </Modal>
      </ContainerButton>
      <li>
        <ButtonRegistration onClick={openModalRegister}>
          Registration
        </ButtonRegistration>

        <Modal
          isOpen={isModalOpenRegister}
          className="modal-content"
          overlayClassName="modal-overlay"
          contentLabel="Modal"
          onRequestClose={closeModalRegister}
        >
          <RegisterForm onClose={closeModalRegister} />
        </Modal>
      </li>
    </UserMenuContainer>
  );
};
