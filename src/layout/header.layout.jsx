import React, { useEffect, useState } from 'react'
import './header.layout.scss'
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HeaderLayout = ({isMyAccount}) => {


  // const [categoryList, setCategoryList] = useState([
  //   {name: '전체보기', fitler: ""},
  //   {name: '제과', fitler: ""},
  //   {name: '제빵', fitler: ""},
  //   {}
  // ])

  const [categoryList, setCategoryList] = useState([]);


  useEffect(() => {
    const category = async () => {
      try {
        const result = await axios.get('http://localhost:8080/category');
        setCategoryList(result.data.categoryLists)
        console.log('result: ', result);
        
      } catch(err) {
        console.log("Error >>", err);
      }
    }

    category()
  }, [])

  const navigate = useNavigate();

  const goPage = (page) => {
    navigate(page);
  }

  return (    
    <header className='header'>
      <div className="header__info">
          <div className="header__info--group">
             <div className="header__info--login"><UserOutlined />로그인</div>
             <div onClick={goPage("/login/member_join")} className="header__info--sign">회원가입</div>
          </div>
      </div>
      <div className="header__logo">
        <div className="header__logo--title">
          모두의 레시피
        </div>
      </div>
        {
          !isMyAccount
          ?
      <div className="header__nav">
        <ul>
          {categoryList.map((category, index) => <li key={index}>{category?.name}</li>)}
        <li><Button type='text'>카테고리관리</Button></li>

        </ul>
      </div>
      : ''
        }
    </header>
  )
}

export default HeaderLayout

//dhfb