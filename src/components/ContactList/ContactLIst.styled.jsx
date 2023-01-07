import styled from "@emotion/styled";

export const List = styled.ul`
  /* https://www.8host.com/blog/stilizaciya-polosy-prokrutki-v-css/ */
  ::-webkit-scrollbar {
    width: 8px; /* ширина всей полосы прокрутки */
  }

  ::-webkit-scrollbar-track {
    background: #e9e9e9; /* цвет зоны отслеживания */
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1d92a4; /* цвет бегунка */
    border-radius: 20px; /* округлось бегунка */
    border: 1px solid #000000b9; //отступ вокруг бегунка
  }
max-height: 400px;
  transition: all 300ms ease-out;
  overflow-y: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  border-radius: 5px;
`;

export const Item = styled.li`
  opacity: 1;
  transition: opacity 500ms ease-out;
  width: 360px;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 10px 0;
  margin: 5px 0;
  border-radius: 5px;
  background-color: #e9e9e9;

  box-shadow: rgb(0, 0, 0) 0px 1px 5px;
  transition: all 250ms ease-out;

  &:hover {
    background: #1d92a4;
    scale: 1.03;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.885) 0px 7px 10px;
  }
  &:hover img {
    box-shadow: rgba(255, 255, 255, 0.9) 0px 0px 10px;
  }

  :hover button {
    opacity: 1;
    transform: scale(1);

    color: black;
    background: white;
    box-shadow: rgb(255, 254, 254) 0px 0px 3px;
  }
`;
export const Avatar = styled.img`
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 250ms ease-out;
`;

export const UserInfo = styled.p`
  margin-left: 15px;
`;

export const DeleteBtn = styled.button`
  opacity: 0;
  transform: scale(0.8);
  padding-top: 2px;
  max-height: 25px;
  margin-left: auto;
  margin-right: 15px;
  border-radius: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: all 400ms ease-out;

  &:hover {
  }
`;
