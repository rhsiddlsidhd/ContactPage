import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Input from "./common/Input";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const keywordSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: "KEYWORD_SEARCH",
      payload: { keyword },
    });

    if (keyword === "") {
    }
  };

  return (
    <SearchInput>
      <form onSubmit={keywordSearch}>
        <Input title="Search" inputValue={keyword} setInputValue={setKeyword} />
        <button type="submit">Search</button>
      </form>
    </SearchInput>
  );
};

export default SearchForm;

const SearchInput = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: center;
  > form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
