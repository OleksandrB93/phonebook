import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "hooks";
import { UserMenuBox, Salut, BtnLogOut } from "./UserMenu.styled";
import { RiLogoutBoxRFill } from "react-icons/ri";
import React from "react";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserMenuBox>
      <Salut>
        Welcome,
        <b>{user.name}</b>
      </Salut>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        <RiLogoutBoxRFill size={22} />
      </BtnLogOut>
    </UserMenuBox>
  );
}
