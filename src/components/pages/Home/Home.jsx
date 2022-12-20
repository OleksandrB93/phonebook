import React from "react";
import { FaHandSpock } from "react-icons/fa";
import { HomePageBox } from "./Home.styled";

export default function Home() {
  return (
    <HomePageBox>
      <h1>
        Welcome to Phonebook
      </h1>
        <div>
          <FaHandSpock size={36}/>
        </div>
    </HomePageBox>
  );
}
