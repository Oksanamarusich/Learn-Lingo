import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
          <Navigation />
          <UserMenu/>
    </Header>
  );
};
