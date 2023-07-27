import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import SidebarComponent from '../component/sidebar.component'
import './my-account.page.scss'

const MyInfoPage = () => {
  return (
    <>
      <Col>
        <div className="my-info">
            <h2 className='main__title'>내 정보</h2>
            <Form name="form_item_path" layout="vertical">
            <div className="my-info__name my-info__box">
                <h2>이름</h2>
                <Input placeholder='현재 이름'></Input>
            </div>
            <div className="my-info__id my-info__box">
                <h2>아이디</h2>
                <Input placeholder='현재 아이디'></Input>
            </div>
            <div className="my-info__email my-info__box">
                <h2>이메일</h2>
                <Input placeholder='현재 이메일'></Input>
            </div>
            <div className="my-info__birth my-info__box">
                <h2>생년월일 8자리</h2>
                <Input placeholder='현재 생년월일'></Input>
            </div>
            <div className="my-info__button">
                <Button>수정하기</Button>
            </div>
            </Form>
        </div>
      </Col>
    </>
  )
}

export default MyInfoPage