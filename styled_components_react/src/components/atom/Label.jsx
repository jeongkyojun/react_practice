import React from "react";
import styled from "styled-components";

const styledLabel = styled.label`
`;

function label({ label, ...rest }) {
  return (
    <label> helloWorld</label>
    //<styledLabel { ...rest }> {label} </styledLabel>
  );
};

export default label;