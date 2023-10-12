import { Button, Col } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PasswordCheckModal from "../component/password_check.modal";
import WithdrawCheckModal from "../component/withdraw_check.modal";
import { closeModal, openModal } from "../store/modal.store";

const WithdrawPage = () => {
  //모달창 관리 reducer
  const isPasswordModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();

  const openPasswordModal = () => {
    dispatch(openModal());
  };

  const closePasswordModal = () => {
    dispatch(closeModal());
  };

  console.log(dispatch(openModal()));

  return (
    <>
      <Col>
        <div className="withdraw">
          <h2 className="main__title">회원 탈퇴하기</h2>
          <div className="withdraw__notice">
            <span>회원 탈퇴를 신청하기 전에 아래 사항을 꼭 확인해주세요.</span>
          </div>
        </div>
        <div className="withdraw__button">
          <Button onClick={openPasswordModal}>탈퇴하기</Button>
        </div>
      </Col>
    </>
  );
};

export default WithdrawPage;
