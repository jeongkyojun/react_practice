import React from "react";
import Label from "../atom/Label";
import Input from "../atom/Input";

function InputLabel({ labelname, account, name, setData, explain }) {
  return (
    <>
      <Label>{labelname}</Label>
      <Input account={account} name={name} setData={setData} />
      <Label>{explain}</Label>
    </>
  );
}

export default InputLabel;
