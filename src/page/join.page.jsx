import { Button } from "antd";
import Input from "antd/es/input/Input";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./join.page.scss";
import axios from "axios";

const JoinPage = () => {
  //   const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birth, setbirth] = useState("");

  const SIGN_URL = "http://localhost:8080/users/sign-up";

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const result = await axios.get(SIGN_URL);
      console.log(result.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  //회원가입 요청
  const register = () => {
    axios
      .post(SIGN_URL, {
        nickname: nickname,
        password: pw,
        email: email,
        name: name,
        birth: birth,
      })
      .then(function (response) {
        console.log("성공", response);
        // response
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log("실패", error);
      })
      .then(function () {
        // 항상 실행
        console.log("데이터 요청 완료");
      });
  };

  return (
    <div className="join-page">
      <div className="join-page__content">
        <div className="join">
          <div className="join__title">회원가입</div>
          <div className="join__form">
            <div className="join__id box">
              <div className="join__id_sub">아이디</div>
              <Input
                id="join__id"
                type="text"
                value={nickname}
                onChange={(event) => {
                  setNickname(event.target.value);
                }}
                placeholder="이메일을 입력해주세요."
              ></Input>
            </div>
            <div className="join__pw box">
              <div className="join__pw_sub">비밀번호</div>
              <Input
                id="join__pw"
                type="text"
                value={pw}
                onChange={(event) => {
                  setPw(event.target.value);
                }}
                placeholder="비밀번호를 입력해주세요."
              ></Input>
            </div>
            <div className="join__pw_again">
              <Input
                id="join__pw_again"
                type="text"
                value={rePw}
                onChange={(event) => {
                  setRePw(event.target.value);
                }}
                placeholder="비밀번호를 입력해주세요."
              ></Input>
            </div>
            <div className="join__email box">
              <div className="join__email_sub">이메일</div>
              <Input
                id="join__email"
                type="text"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></Input>
            </div>
            <div className="join__name box">
              <div className="join__name_sub">이름</div>
              <Input
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              ></Input>
            </div>
            <div className="join__birth box">
              <div className="join__birth_sub">생년월일 8자리</div>
              <Input
                type="text"
                value={birth}
                onChange={(event) => {
                  setbirth(event.target.value);
                }}
              ></Input>
            </div>
            <Button onClick={() => register()}>회원가입</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
