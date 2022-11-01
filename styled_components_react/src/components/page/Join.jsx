import React, { useState } from "react";
import styled from "styled-components";

import Button from "../atom/Button";
import InputLabel from "../molecule/inputLabel";

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
  const delimeter = "\"\\$?; '\n\b\t/";

  const [account, setAccount] = useState({
    name: "",
    password: "",
    phone_number: "",
    address: "",
    std_num: "",
  });

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
    console.log(account);
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
    return str.length === 0;
  };

  const isTooLong = (str, length) => {
    return str.length > length;
  };

  const check_String = (str, delimeter) => {
    for (let i = 0; i < str.length; i++) {
      if (delimeter.includes(str[i])) {
        return true;
      }
    }
    return false;
  };

  const check_password = (str) => {
    //let cssarr = labelcss.map((item) => item);
    let text = "글자가 없습니다";
    let color = "red";
    if (isEmpty(str)) {
    } else if (isTooLong(str, 16)) {
      text = "글자가 너무 깁니다!";
    } else {
      if (check_String(str, delimeter)) {
        text =
          "입력할 수 없는 문자가 들어가 있습니다! (공백 또는 \"\\$?;' 등의 특수문자)";
      } else {
        color = "green";
        text = "가능한 비밀번호입니다.";
      }
    }

    const item = {
      ...labelcss[1],
      color,
      text,
    };
    //cssarr[1] = item; // 이렇게만 해도 변경이 되어버린다.
    //setLabelCss(cssarr);
    setLabelCss((prev) => {
      return {
        ...prev,
        1: { ...item },
      };
    });
    console.log(labelcss);
  };

  // 나가기 버튼
  const exitBtn = () => {
    console.log("나가기");
  };

  // input 함수
  const inputAccount = (name, value) => {
    switch (name) {
      case nameArr[0]:
        break;
      case nameArr[1]:
        check_password(value);
        break;
      case nameArr[2]:
        break;
      case nameArr[3]:
        break;
      case nameArr[4]:
        break;
      default:
        break;
    }
    setAccount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <AppBlock>
      {nameArr.map((name, idx) => {
        return (
          <InputLabel
            idx={idx}
            account={account} // 계정정보
            inputHandler={inputAccount} // 계정 set 함수
            name={name} // 이름
            labelname={labelArr[idx]} // 라벨
            key={name + idx} // 키
            labelcss={labelcss[idx]}
            textType={inputType[idx]}
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
