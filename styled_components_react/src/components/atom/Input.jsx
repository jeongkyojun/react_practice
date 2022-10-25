import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input``;

const Input = ({ account, setData, name }) => {
  const InputHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form>
      <StyledInput value={account[name]} name={name} onChange={InputHandler} />
    </form>
  );
};

export default Input;
