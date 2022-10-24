import React from "react";
import Label from "../atom/Label";
import Input from "../atom/Input";

function inputLabel(props){
  return (
    <>
      <Label>{props.labelname}</Label>
      <Input />
    </>
  )
};

export default inputLabel;