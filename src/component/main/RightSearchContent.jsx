import React from "react";
import styled from "styled-components";

const RightSearchContent = () => {
  return (
    <>
      <SearchContent>
        <SearchInput>
          <label>
            <input type="text" />
          </label>
          <button>Search</button>
        </SearchInput>
        <SearchListBoard>
          <div>num</div>
          <ListBoard>
            <ListItem>
              <img src="#" alt="이미지" />
              <div>
                <div className="item_name">김누나</div>
                <div className="item_phonenumber">012301230</div>
              </div>
            </ListItem>
            <ListItem>
              <img src="#" alt="이미지" />
              <div>
                <div>김누나</div>
                <div>012301230</div>
              </div>
            </ListItem>
            <ListItem>
              <img src="#" alt="이미지" />
              <div>
                <div className="item_name">김누나</div>
                <div className="item_phonenumber">012301230</div>
              </div>
            </ListItem>
          </ListBoard>
        </SearchListBoard>
      </SearchContent>
    </>
  );
};

export default RightSearchContent;

const SearchContent = styled.div`
  width: 45%;
  height: 35%;
  border: 1px solid rebeccapurple;
`;

const SearchInput = styled.div`
  width: 80%;
  height: 20%;
`;

const SearchListBoard = styled.div`
  height: 80%;
  border: 1px solid black;
  > div:first-child {
    //Count
    height: 10%;
    border: 1px solid blue;
  }
`;

const ListBoard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const ListItem = styled.div`
  display: flex;
  width: 90%;
  border: 1px solid black;
  margin-bottom: 1rem;

  > img {
    width: 5rem;
    height: 5rem;
    border: 1px solid black;
  }
  > div {
    margin-left: 1rem;
    width: 100%;
    & > .item_name {
      width: 100%;
      height: 50%;
      background-color: red;
    }
    & > .item_phonenumber {
      width: 100%;
      height: 50%;
      background-color: blue;
    }
  }
`;
