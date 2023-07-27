import React from 'react'
import './login.page.scss';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

    const navigate = useNavigate();
    
    const onClick = () => {
        navigate('/login/member_join')
    }

  return (
    <div className="wrap">
    <div id="login">
        <div id="login__title">
            LOGIN
        </div>
        <div id="login__form">
            <Input id='login__id' type="text" placeholder='이메일을 입력해주세요.' />
            <Input id='login__pw' type="text" placeholder='비밀번호를 입력해주세요.'/>
            <Button>로그인</Button>
        <Button type='link' id="login_search">
            아이디, 비밀번호 찾기
        </Button>
        <Button>google 아이디로 로그인하기</Button>
        <Button onClick={onClick}>회원가입</Button>
        </div>
    </div>
    </div>
  )
}

export default LoginPage