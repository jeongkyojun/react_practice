import React from "react";
import styled, { css } from "styled-components";
import "./App.css";
import Button from "./components/atom/Button";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

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
  return (
    <AppBlock>
      <Button>Button</Button>
    </AppBlock>
  );
}

export default App;
