import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label``;

function label({ children, ...rest }) {
  return (
    // 부모 component : <label>[라벨이름]</label>
    // 위와같은 상황에서 태그 사이의 값을 출력시키려면 무조건 children을 사용해야 한다.
    <StyledLabel {...rest}> {children} </StyledLabel>
    //<styledLabel { ...rest }> {label} </styledLabel>
  );
}

export default label;
