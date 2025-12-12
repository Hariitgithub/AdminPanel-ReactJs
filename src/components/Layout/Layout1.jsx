import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBarConst from '../TopBarConst/TopBarConst'
import ProfileNavBar from '../ProfileNavbar'

const Layout1 = () => {
  return (
    <div className="">
      <TopBarConst />
      <div className="dashboard">
        <ProfileNavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout1