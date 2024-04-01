import styled from "styled-components";
import "./App.css";
import Create from "./component/main/Create";
import Search from "./component/main/Search";

function App() {
  return (
    <div className="App">
      <PhoneBookHeader>Phone Book</PhoneBookHeader>
      <PhoneBookContentWrapper>
        <Create />
        <Search />
      </PhoneBookContentWrapper>
    </div>
  );
}

export default App;

const PhoneBookHeader = styled.header`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
`;

const PhoneBookContentWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;
