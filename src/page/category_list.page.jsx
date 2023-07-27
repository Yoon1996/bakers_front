import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Row, Space, notification } from 'antd'
import SidebarComponent from '../componet/sidebar.component'
import axios from 'axios';
import { CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import NotificationComponent from '../componet/notification.component';




const CategoryListpage = () => {


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


  return (
    <>
    <Row className='main__layout' justify="center">
      <Col span={6}>
        <SidebarComponent></SidebarComponent>
      </Col>
      <Col span={12}>
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
          <NotificationComponent></NotificationComponent>
      </Col>
      <Col span={6}></Col>
    </Row>
    </>
    )
}

export default CategoryListpage