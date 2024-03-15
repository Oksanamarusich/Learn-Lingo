import { LogInIcon } from "components/icons/LogInIcon";
import { ButtonLogIn, ButtonRegistration, ContainerButton, UserMenuContainer } from "./UserMenu.styled";

export const UserMenu = () => {
  return (
    <>
      <UserMenuContainer>
        <ContainerButton>
          <LogInIcon/>
          <ButtonLogIn>LogIn</ButtonLogIn>
        </ContainerButton>
        <li>
          <ButtonRegistration>Registration</ButtonRegistration>
        </li>
      </UserMenuContainer>
    </>
  );
};
