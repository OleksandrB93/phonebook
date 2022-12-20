import "./App.css";
import React from "react";

import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout/Layout";
import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";

import { useDispatch } from "react-redux";
import { AppContainer } from "App.styled";
const HomePage = lazy(() => import("./components/pages/Home/Home"));
const RegisterPage = lazy(() => import("./components/pages/Register/Register"));
const LoginPage = lazy(() => import("./components/pages/Login/Login"));
const ContactsPage = lazy(()=>import("./components/pages/Contacts/ContactsPage"))


export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <AppContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </AppContainer>
  );
}

