import { Button, Col, Row } from 'antd'
import React from 'react'
import SidebarComponent from '../componet/sidebar.component'

const WithdrawPage = () => {
  return (
    <>
    <Row className='main__layout' justify="center">
      <Col span={6}>
        <SidebarComponent></SidebarComponent>
      </Col>
      <Col span={12}>
        <div className="withdraw">
        <h2 className='main__title'>회원 탈퇴하기</h2>
        <div className="withdraw__notice">
            <span>회원 탈퇴를 신청하기 전에 아래 사항을 꼭 확인해주세요.</span>
        </div>
        </div>
        <div className="withdraw__button">
            <Button>탈퇴하기</Button>
            <Button>취소하기</Button>
        </div>
      </Col>
      <Col span={6}></Col>
    </Row>
    </>
  )
}

export default WithdrawPage