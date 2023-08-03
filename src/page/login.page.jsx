import React, { useState } from 'react'
import './login.page.scss';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const LoginPage = () => {

    const navigate = useNavigate();

    

    
    const [Id, setId] = useState("");
    const [Pw, setPw] = useState("");

    const onIdHandler = (e) => {
        setId(e.target.value);
    }

    const onPwHandler = (e) => {
        setPw(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log('Email', Id);
        console.log('Password', Pw);

    }

  return (
    <div className="login-page">
        <div className="login-page__content">
    <div id="login">
        <div id="login__title">
            LOGIN
        </div>
        <div id="login__form">
            <Input id='login__id' type="id" value={Id} onChange={onIdHandler} placeholder='이메일을 입력해주세요.' />
            <Input id='login__pw' type="pw" value={Pw} onChange={onPwHandler} placeholder='비밀번호를 입력해주세요.'/>
            <Button>로그인</Button>
        <Button type='link' id="login_search">
            아이디, 비밀번호 찾기
        </Button>
        <Button>google 아이디로 로그인하기</Button>
        <Button>회원가입</Button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default LoginPage