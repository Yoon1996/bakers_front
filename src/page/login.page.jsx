import React, { useState } from 'react'
import './login.page.scss';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCheck } from '../service/user.service';



const LoginPage = () => {

    const navigate = useNavigate();

    const [nickname, setNickname] = useState("");
    const [pw, setPw] = useState("");

    const onIdHandler = (e) => {
        setNickname(e.target.value);
    }

    const onPwHandler = (e) => {
        setPw(e.target.value);
    }

    //에러 메세지 state
    const [errors, setErrors] = useState({})

    //로그인 핸들러
    const login = () => {

        const LoginParams = {

            nickname: nickname,
            password: pw,
        }

    
    loginCheck(LoginParams)
      .then(function (response) {
        console.log("성공", response)
        alert(`${response.data.nickname}님 환영합니다!`)
        // console.log("dd", response.data.nickname)
        // if(response.data.success === true){
        //     // const {accessToken} = response.data] = `Bea
        //     // axios.defaults.headers.common['Authorization'rer ${accessToken}`;
        //     alert(`${response.data.nickname}님 환영합니다!`)
        //     navigate('/main')
        // } else {
        //     setErrors({
        //         ...errors,
        //         nickname: {errId: "ID 혹은 비밀번호를 잘못 입력하셨거나 등록되지 않은 ID 입니다."}
        //     })
        // } 
      }
      )
      .catch(function (error) {
        // 오류발생시 실행
        console.log("실패", error);
      });

    }

  return (
    <div className="login-page">
        <div className="login-page__content">
    <div id="login">
        <div id="login__title">
            LOGIN
        </div>
        <div id="login__form">
            <div className="hint">
            {errors?.nickname?.errId ? <p>{errors?.nickname?.errId}</p> : ''}
            </div>
            <Input id='login__id' type="id" value={nickname} onChange={onIdHandler} placeholder='아이디를 입력해주세요.' />
            <Input id='login__pw' type="pw" value={pw} onChange={onPwHandler} placeholder='비밀번호를 입력해주세요.'/>
            <Button onClick={login}>로그인</Button>
        <Button type='link' id="login_search">
            아이디, 비밀번호 찾기
        </Button>
        <Button>google 아이디로 로그인하기</Button>
        <Button onClick={() => navigate('/login/member_join')}>회원가입</Button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default LoginPage