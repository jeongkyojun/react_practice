import React, { useEffect, useState } from "react";
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
  const inputType = ["text", "password", "text", "text", "text"];
  const [account, setAccount] = useState({
    name: "",
    password: "",
    phone_number: "",
    address: "",
    std_num: "",
  });

  const [isInputOk, setInputOk] = useState([true, true, true, true, true]);

  const [labelcss, setLabelCss] = useState([
    {
      text: "테스트용 - 아이디",
      color: "green",
      size: 10,
    },
    {
      text: "",
      color: "green",
      size: 10,
    },
    {
      text: "테스트용 - 전화번호",
      color: "green",
      size: 10,
    },
    {
      text: "",
      color: "green",
      size: 10,
    },
    {
      text: "",
      color: "green",
      size: 10,
    },
  ]);

  // 회원가입 버튼
  const clickBtn = () => {
    console.log("초기화");
    // 정보 초기화
    setAccount({
      name: "",
      password: "",
      phone_number: "",
      address: "",
      std_num: "",
    });
  };

  const isEmpty = (str) => {
    if (str.length === 0) {
    }
    return false;
    return true;
  };
  const check_password = (str) => {
    const cssarr = labelcss;
    console.log(str.length);
    if (str.length === 0) {
      console.log("글자가 비어있습니다.");
      cssarr[1] = { ...cssarr[1], color: "red", text: "글자없음" };
    } else if (str.length > 20) {
      console.log("글자가 너무 많습니다.");
      cssarr[1] = { ...cssarr[1], color: "red", text: "글자가 너무 깁니다!" };
    } else {
      console.log("글자 개수를 확인합니다.");
      for (let i = 0; i < str.length; i++) {
        if ("\"\\$?; '\n\b\t/".includes(str[i])) {
          console.log("입력할 수 없는 문자가 들어가있습니다.");
          cssarr[1] = {
            ...cssarr[1],
            color: "red",
            text: "입력할 수 없는 문자가 들어가 있습니다! ( " + str[i] + " )",
          };
          setLabelCss(cssarr);
          return;
        }
      }
      console.log("비밀번호 확인결과 문제없습니다.");
      cssarr[1] = {
        ...cssarr[1],
        color: "green",
        text: "가능한 비밀번호입니다.",
      };
    }
    setLabelCss(cssarr);
    console.log(labelcss);
  };

  // 나가기 버튼
  const exitBtn = () => {
    console.log("나가기");
  };

  useEffect(() => {
    check_password(account.password);
    return () => {
      console.log("unmount");
    };
  }, [account.password]);

  return (
    <AppBlock>
      {nameArr.map((name, idx) => {
        return (
          <InputLabel
            idx={idx}
            account={account} // 계정정보
            setData={setAccount} // 계정 set 함수
            name={name} // 이름
            labelname={labelArr[idx]} // 라벨
            key={name + idx} // 키
            labelcss={labelcss[idx]}
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
