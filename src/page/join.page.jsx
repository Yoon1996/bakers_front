import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const JoinPage = () => {

    const navigate = useNavigate();

    const goPage = () => {
        navigate('/')
    }

  return (
    <div className="wrap join__wrap">
        <div id="join">
            <div id="join__title">
                회원가입
            </div>
            <div id="join__form">
                <div className="join__id box">
                    <div className="join__id_sub">아이디</div>
                    <Input id='join__id' type='text' placeholder='이메일을 입력해주세요.'></Input>
                </div>
                <div className="join__pw box">
                    <div className="join__pw_sub">비밀번호</div>
                    <Input id='join__pw' type='text' placeholder='비밀번호를 입력해주세요.'></Input>
                </div>
                <div className="join__pw_again">
                    <Input id='join__pw_again' type='text' placeholder='비밀번호를 입력해주세요.'></Input>
                    </div>
                <div className="join__email box">
                    <div className="join__email_sub">이메일</div>
                    <Input id='join__email' type='text'></Input>
                </div>
                <div className="join__name box">
                    <div className="join__name_sub">이름</div>
                    <Input type='text'></Input>
                </div>
                <div className="join__birth box">
                    <div className="join__birth_sub">생년월일 8자리</div>
                    <Input type='text'></Input>
                </div>
                <Button>회원가입</Button>
            </div>
        </div>
    </div>
  )
}

export default JoinPage