import { useAuth } from "hooks";
import { HeaderLink } from "./Navigation.styled";
import React from "react";

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <HeaderLink to="/">PhoneBook</HeaderLink>
      {isLoggedIn && <HeaderLink to="/contacts">Contacts</HeaderLink>}
    </nav>
  );
}
