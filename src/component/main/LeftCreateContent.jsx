import React from "react";
import styled from "styled-components";
import InputStyle from "../common/InputStyle";

const LeftCreateContent = () => {
  return (
    <>
      <CreateContent>
        <form>
          <div>
            <div>Name</div>
            <label>
              <input type="text" />
            </label>
          </div>
          <div>
            <div>Phone Number</div>
            <input type="text" />
          </div>
          <button>Create</button>
        </form>
        <InputStyle />
      </CreateContent>
    </>
  );
};

export default LeftCreateContent;

const CreateContent = styled.div`
  width: 45%;
  height: 35%;
  border: 1px solid pink;
`;
