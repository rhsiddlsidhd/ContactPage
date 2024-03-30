import styled from "styled-components";
import "./App.css";
import LeftCreateContent from "./component/main/LeftCreateContent";
import RightSearchContent from "./component/main/RightSearchContent";

function App() {
  return (
    <div className="App">
      <PhoneBookHeader>Phone Book</PhoneBookHeader>
      <PhoneBookContentWrapper>
        <LeftCreateContent />
        <RightSearchContent />
      </PhoneBookContentWrapper>
    </div>
  );
}

export default App;

const PhoneBookHeader = styled.header`
  display: flex;
  justify-content: center;
`;

const PhoneBookContentWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
`;
