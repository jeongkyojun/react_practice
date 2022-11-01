import React from "react";
import Label from "../atom/Label";
import Input from "../atom/Input";

const InputLabel = ({
  labelname,
  account,
  name,
  inputHandler,
  labelcss,
  textType,
}) => {
  return (
    <div>
      <Label>{labelname}</Label>
      <Input
        account={account}
        name={name}
        inputHandler={inputHandler}
        textType={textType}
      />
      <Label size={labelcss.size} color={labelcss.color}>
        {labelcss.text}
      </Label>
    </div>
  );
};

export default InputLabel;
