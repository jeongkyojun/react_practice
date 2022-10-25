import React from "react";
import Label from "../atom/Label";
import Input from "../atom/Input";

const InputLabel = ({ labelname, account, name, setData, labelcss }) => {
  return (
    <div>
      <Label>{labelname}</Label>
      <Input account={account} name={name} setData={setData} />
      <Label size={labelcss.size} color={labelcss.color}>
        {labelcss.text}
      </Label>
    </div>
  );
};

export default InputLabel;
