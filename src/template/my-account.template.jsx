import React from 'react'
import HeaderLayout from '../layout/header.layout'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'antd'
import SidebarComponent from '../componet/sidebar.component'


const MyAccountTemplate = () => {
  return (
<>
    <HeaderLayout isMyAccount={false}/>
    <main>
      <Outlet></Outlet>
    </main>
    </>  )
}

export default MyAccountTemplate