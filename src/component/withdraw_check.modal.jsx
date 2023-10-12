import { Button, Modal } from "antd";
import React from "react";
import { withDraw } from "../service/user.service";

const WithdrawCheckModal = ({ isModalOpen, handleCancel }) => {
  const withDrawAccount = () => {
    withDraw()
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
    handleCancel();
  };

  return (
    <>
      <Modal
        className="modal"
        width={400}
        title=""
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <div>정말 탈퇴하시겠습니까?</div>
        <div>등록되어있는 레시피, 카테고리는 모두 삭제 됩니다.</div>
        <div className="withdraw__util"></div>
        <Button onClick={handleCancel}>취소</Button>
        <Button onClick={withDrawAccount}>확인</Button>
      </Modal>
    </>
  );
};

export default WithdrawCheckModal;
