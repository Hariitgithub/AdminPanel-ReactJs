import React from 'react'
import { profile, search, search1 } from '../../assets/img'
import { topItems } from '../redux/api/dummyJson'
import RevenueChart from '../../components/Dashboard/RevenueChart'
import SalesFunnelChart from '../../components/Dashboard/SalesFunnelChart'
import OngoingSaleChart from '../../components/Dashboard/OngoingSaleChart'
import RecentTransaction from '../../components/Dashboard/RecentTransaction'
import TopItems from '../../components/Dashboard/TopItems'

const Dashboard1 = () => {
    return (
        <div className='dashRightView home_section trans'>
            <div className=' mt-2 d-flex ac-jb overview-bar px-4'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Dashboard</h4>
                <div className="d-flex align-items-center ps-2 border-search1  bg-white ms-3">
                    <img src={search1} alt="" className='search-icon black' />
                    <input type="text" placeholder='Search here....' className=' cust-btn ps-2 mb-1' />
                </div>
            </div>
            <div className='d-flex mt-4 gap-3 '>
                <div className='w-100'>
                    <div className='d-flex gap-3'>
                        <RevenueChart />
                        <SalesFunnelChart />
                    </div>
                    <RecentTransaction />
                </div>
                <div>
                    <OngoingSaleChart />

                    <TopItems />
                </div>
            </div>

        </div >
    )
}

export default Dashboard1