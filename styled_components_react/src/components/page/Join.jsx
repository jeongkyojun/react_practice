import React, { useState } from "react";
import styled from "styled-components";

import Button from "../atom/Button";
import InputLabel from "../molecule/InputLabel";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function Join() {
  const nameArr = ["name", "password", "phone_number", "address", "std_num"];
  const labelArr = ["이름", "비밀번호", "전화번호", "주소", "학번"];
  const [account, setAccount] = useState({
    name: "",
    password: "",
    phone_number: "",
    address: "",
    std_num: "",
  });

  // 회원가입 버튼
  const clickBtn = () => {
    console.log("click");
    console.log(
      account.name +
        " , " +
        account.password +
        " , " +
        account.phone_number +
        " , " +
        account.address +
        " , " +
        account.std_num,
    );
    setAccount({
      name: "",
      password: "",
      phone_number: "",
      address: "",
      std_num: "",
    });
  };

  // 나가기 버튼
  const exitBtn = () => {
    console.log("나가기");
  };

  return (
    <AppBlock>
      {nameArr.map((name, idx) => {
        return (
          <InputLabel
            account={account}
            setData={setAccount}
            name={name}
            labelname={labelArr[idx]}
            key={name + idx}
            explain=""
          ></InputLabel>
        );
      })}
      <Button setData={setAccount} onClick={() => clickBtn()}>
        가입
      </Button>
      <Button onClick={() => exitBtn()}>나가기</Button>
    </AppBlock>
  );
}

export default Join;
