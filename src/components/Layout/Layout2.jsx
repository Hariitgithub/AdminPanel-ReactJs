import React from 'react'
import TopBarConst from '../TopBarConst/TopBarConst'
import { Outlet } from 'react-router-dom'

const Layout2 = () => {
    return (
        <div className="">
            <TopBarConst />
            <Outlet />
        </div>
    )
}

export default Layout2