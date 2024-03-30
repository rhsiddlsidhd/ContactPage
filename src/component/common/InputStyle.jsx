import React from "react";
import styled from "styled-components";

const InputStyle = ({ ...rest }) => {
  return (
    <InputWrapper>
      <Input type="text" />
      <label>Name</label>
      <span></span>
    </InputWrapper>
  );
};

export default InputStyle;

const InputWrapper = styled.div`
  position: relative;
  width: 300px;
  margin-left: 50px;
  margin-top: 100px;
  > label {
    position: absolute;
    color: #aaa;
    left: 10px;
    font-size: 20px;
    bottom: 8px;
    transition: all 0.2s;
  }
  > span {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0%; /* right로만 바꿔주면 오 - 왼 */
    background-color: #666;
    width: 0;
    height: 2px;
    border-radius: 2px;
    transition: 0.5s;
  }
`;

const Input = styled.input.attrs((props) => ({
  ...props,
}))`
  font-size: 15px;
  color: #222222;
  width: 300px;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;

  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
  &:valid ~ label {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
  &:focus ~ span,
  &:valid ~ span {
    width: 100%;
  }
`;
