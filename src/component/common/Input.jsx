import React from "react";
import styled from "styled-components";

const Input = ({ ...rest }) => {
  const { title, inputValue, setInputValue, required } = rest;

  const length = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <InputWrapper>
      <div>{title}</div>
      <InputContent
        required={required}
        value={inputValue}
        onChange={(e) => length(e)}
      />
      <label>{title}</label>
      <Span $inputvaluelength={inputValue?.length}></Span>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  > label {
    position: absolute;
    color: #aaa;
    left: 1rem;
    font-size: 1.5rem;
    bottom: 10%;
  }
`;

const InputContent = styled.input.attrs((props) => ({
  ...props,

  type: "text",
}))`
  font-size: 1rem;
  color: #222222;
  width: 100%;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 10px;
  background: transparent;
  box-sizing: border-box;

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus {
    outline: none;
  }
  &:focus ~ label {
    font-size: 1rem;
    left: 0;
    bottom: 60%;
    color: transparent;
    transition: all 1s;
  }

  &:valid ~ label {
    left: 0;
    bottom: 60%;
    color: transparent;
  }
`;

const Span = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #666;
  height: 2px;
  width: ${({ $inputvaluelength }) => $inputvaluelength}rem;
  max-width: 100%;
`;
