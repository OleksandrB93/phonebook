import styled from "@emotion/styled";

export const Form = styled.form`
  padding: 0;
`;

export const NameLabel = styled.label`
  color: #e9e9e9;
  margin-right: 15px;
`;

export const Input = styled.input`
  width: 100px;
  margin-left: 3px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #360032;
  transition: border-bottom 300ms ease-in;

  ::placeholder {
    color: #ffffff;
    font-size: 12px;
    font-style: italic;
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid #ffffff;
  }
`;
export const AddContactBtn = styled.button`
  /* padding: 5px; */
  /* max-height: 25px; */
  margin-left: 10px;
  border-radius: 5px;
  transition: all 250ms ease-out;
  background: white;
  border: none;
  cursor: pointer;
  color: black;

  &:hover {
    color: #ffffff;
    background: #001a1e;
    box-shadow: rgb(255, 254, 254) 0px 0px 2px 1px;
  }
`;

export const IconAdd = styled.svg`
  /* width: 80px;
  height: 80px; */
`;
