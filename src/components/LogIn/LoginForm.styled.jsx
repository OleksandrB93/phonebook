import styled from "@emotion/styled";
export const Form = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const LabelLogin = styled.label`
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: white;
`;

export const Input = styled.input`
  /* width: 180px; */
  border-radius: 7px;
  margin-left: 15px;
  background-color: #daf9ff;
  border: 2px solid black;
  transition: border 300ms ease-in;

  outline: 0;

  ::placeholder {
    background-color: white;
    color: #ffffff;
    font-size: 12px;
    font-style: italic;
    text-align: center;
  }
`;

export const ButtonLogout = styled.button`
  margin-top: 20px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 7px;
  :hover {
    color: white;
    background-color: rgba(6, 163, 191, 1);
    transition: background-color 250ms ease-out;
  }
`;
