import React from "react";
import styled, { css } from "styled-components";
import "./App.css";
import Join from "../src/components/page/Join";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  //return <Circle color="blue" huge />;
  return <Join />;
}

export default App;
