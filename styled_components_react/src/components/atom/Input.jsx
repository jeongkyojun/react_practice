import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 20rem;
  height: 3rem;
  font-size: 1rem;

  color: ${({ textColor }) => textColor || "black"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#D1EBFA"};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
    transition: all 0.1s;
    box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.5);
  }
`;

const Input = ({ account, inputHandler, name, textType }) => {
  return (
    <form>
      <StyledInput
        value={account[name]}
        name={name}
        onChange={(e) => inputHandler(name, e.target.value)}
        type={textType}
      />
    </form>
  );
};

export default Input;
