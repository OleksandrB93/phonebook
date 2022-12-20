import Navigation from "components/Navition/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";
import { AppBarBox } from "./AppBar.styled";

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarBox>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarBox>
  );
}
