import styled from "@emotion/styled";

export const SearchInputSt = styled.input`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #360032;
  transition: border-bottom 300ms ease-in;
  &:hover,
  &:focus {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid #e9e9e9;
  }

  ::placeholder {
    color: #ffffff;
    font-size: 12px;
    font-style: italic;
    text-align: center;
  }
`;
