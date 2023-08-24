import { Button, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import SidebarComponent from "../component/sidebar.component";
import "./my-account.page.scss";
import { myInfo } from "../service/user.service";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../util/localstorage.util";
import axios from "axios";
import { loginUser } from "../store/user.store";
import useSelection from "antd/es/table/hooks/useSelection";

const MyInfoPage = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    myInfo()
      .then((res) => {
        setInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <>
      <Col>
        <div className="my-info">
          <h2 className="main__title">내 정보</h2>
          <Form name="form_item_path" layout="vertical">
            <div className="my-info__name my-info__box">
              <h2>이름</h2>
              <Input placeholder={`${info.name}`}></Input>
            </div>
            <div className="my-info__id my-info__box">
              <h2>아이디</h2>
              <Input placeholder="현재 아이디"></Input>
            </div>
            <div className="my-info__email my-info__box">
              <h2>이메일</h2>
              <Input placeholder="현재 이메일"></Input>
            </div>
            <div className="my-info__birth my-info__box">
              <h2>생년월일 8자리</h2>
              <Input placeholder="현재 생년월일"></Input>
            </div>
            <div className="my-info__button">
              <Button>수정하기</Button>
            </div>
          </Form>
        </div>
      </Col>
    </>
  );
};

export default MyInfoPage;
