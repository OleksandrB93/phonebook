import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Form, LabelLogin, Input, ButtonLogout } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelLogin>
        <b>Email</b>
        <Input type="email" name="email" />
      </LabelLogin>
      <LabelLogin>
        <b> Password</b>
        <Input type="password" name="password" />
      </LabelLogin>
      <ButtonLogout type="submit">
        <b>Log In</b>
      </ButtonLogout>
    </Form>
  );
};
