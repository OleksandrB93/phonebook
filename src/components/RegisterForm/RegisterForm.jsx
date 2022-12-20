import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import {
  Form,
  LabelLogin,
  Input,
  ButtonLogout,
} from "components/LogIn/LoginForm.styled";
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelLogin>
        Username
        <Input type="text" name="name" />
      </LabelLogin>
      <LabelLogin>
        Email
        <Input type="email" name="email" />
      </LabelLogin>
      <LabelLogin>
        Password
        <Input type="password" name="password" />
      </LabelLogin>
      <ButtonLogout type="submit">Register</ButtonLogout>
    </Form>
  );
};
