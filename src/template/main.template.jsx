import React from 'react'
import HeaderLayout from '../layout/header.layout'
import { Outlet } from 'react-router-dom'

const MainTemplate = () => {
  return (
    <>
    <HeaderLayout/>
    <main>
        <Outlet>
            
        </Outlet>
    </main>
    </>
  )
}

export default MainTemplate