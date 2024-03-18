import React from 'react'
import './AdminLayout.css'
import SideBar from '../../components/admin/sidebar/SideBar'
import NavBar from '../../components/admin/navbar/NavBar'
import { Outlet } from 'react-router-dom'



function AdminLayout() {
  return (
    <div className='adminLayout'>
      <SideBar />
      <NavBar />
      <div className="adminLayout__container">
       
        <div className="adminLayout__contentContainer">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout