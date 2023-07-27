import { Button, Col, Row } from 'antd'
import React from 'react'
import SidebarComponent from '../component/sidebar.component'

const WithdrawPage = () => {
  return (
    <>
      <Col>
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
    </>
  )
}

export default WithdrawPage