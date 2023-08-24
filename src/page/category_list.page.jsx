import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Row, Space, notification } from 'antd'
import SidebarComponent from '../component/sidebar.component'
import axios from 'axios';
import { CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import NotificationComponent from '../component/notification.component';
import { Outlet } from 'react-router-dom';




const CategoryListpage = () => {


  const [categoryList, setCategoryList] = useState([]);


  useEffect(() => {
    const category = async () => {
      try {
        const result = await axios.get('http://localhost:8080/category');
        setCategoryList(result.data.categoryLists)
        // console.log('result: ', result);
        
      } catch(err) {
        // console.log("Error >>", err);
      }
    }

    category()
  }, [])


  return (
    <>
    <Col>
        <div className="category">
          <div className="main__title">
            카테고리 관리
          </div>
          <div className="category__field">
            {categoryList.map((category, index) => <li key={index}>{category?.name}<CloseCircleOutlined className='category__delete_button' /></li>)}
            <li className='category__add_button'><PlusCircleOutlined /></li>
          </div>
          <Button className='category__save_button'>저장하기</Button>
        </div>
      </Col>
    <Outlet></Outlet>
    </>
    )
}

export default CategoryListpage