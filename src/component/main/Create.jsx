import React, { useState } from "react";
import styled from "styled-components";
import Input from "../common/Input";
import { useDispatch } from "react-redux";

const Create = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
    setName("");
    setPhoneNumber("");
  };

  return (
    <CreateContent>
      <form onSubmit={addContact}>
        <Input
          title="Name"
          setInputValue={setName}
          inputValue={name}
          required
        />
        <Input
          title="PhoneNumber"
          setInputValue={setPhoneNumber}
          inputValue={phoneNumber}
          required
        />
        <button type="submit">Create</button>
      </form>
    </CreateContent>
  );
};

export default Create;

const CreateContent = styled.div`
  width: 45%;
  height: 35%;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  > form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 860px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: none;
    > form {
      width: 50%;
    }
  }
`;
