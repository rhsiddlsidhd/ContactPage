import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SearchForm from "../SearchForm";

const Search = () => {
  const [filterList, setFilterList] = useState([]);
  const imgPath = process.env.REACT_APP_IMAGE_PATH;

  const imgsrc = `${imgPath}/noimage.jpg`;

  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);

  useEffect(() => {
    if (keyword !== "") {
      let filterItem = contactList.filter((it) => it.name.includes(keyword));
      setFilterList(filterItem);
    } else {
      setFilterList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <SearchContent>
      <SearchForm />
      <SearchListBoard>
        <div>Num : {filterList.length}</div>
        <ListBoard>
          {filterList.map((it, index) => {
            return (
              <ListItem key={index}>
                <div>
                  <img src={`${imgsrc}`} alt="이미지" />
                </div>
                <div>
                  <div className="item_name">Name : {it.name}</div>
                  <div className="item_phonenumber">
                    PhoneNumber : {it.phoneNumber}
                  </div>
                </div>
              </ListItem>
            );
          })}
        </ListBoard>
      </SearchListBoard>
    </SearchContent>
  );
};

export default Search;

const SearchContent = styled.div`
  width: 45%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

  @media screen and (max-width: 860px) {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`;

const SearchListBoard = styled.div`
  width: 80%;
  height: 80%;

  > div:first-child {
    //Count
    height: 10%;
    font-weight: bold;
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
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid black;
  div:first-child {
    width: 25%;
    > img {
      width: 100%;
      height: 100%;
    }
  }

  > div:last-child {
    margin-left: 1rem;
    width: 75%;
    height: 100%;

    & > .item_name {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
    }
    & > .item_phonenumber {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
    }
  }
`;
