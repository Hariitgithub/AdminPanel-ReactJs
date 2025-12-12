import React from 'react'
import { recent_transaction } from '../../screens/redux/api/dummyJson'

const RecentTransaction = () => {
    return (
        <div className='border-outline1 mt-3'>
            <div className='d-flex ac-jb px-3'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-20 fs-xl-22 fs-xxl-24 mt-3  mb-0 '>Recent Transaction</h4>
                <button className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 mt-3 primary cust-btn dark-white mb-0'>See all</button>
            </div>
            <div className='bg-primary1 trans-head p-2 d-flex ac-jb mt-2'>
                <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 primary w-20 text-center trans-head mb-0 '>Code</p>
                <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 primary w-20 text-center trans-head mb-0 '>Product</p>
                <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 primary w-20 text-center trans-head mb-0 '>Date</p>
                <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 primary w-20 text-center trans-head mb-0 '>Price</p>
                <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 primary w-20 text-center trans-head mb-0 '>Status</p>
            </div>
            {recent_transaction.map((item) => {
                return (
                    <div className=' p-2 d-flex ac-jb '>
                        <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 w-20 text-center  mb-0'>{item.code}</p>
                        <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 w-20 text-center  mb-0 '>{item.product}</p>
                        <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 w-20 text-center  mb-0 '>{item.date}</p>
                        <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 w-20 text-center  mb-0 '>{item.price}</p>
                        <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 w-20 text-center green mb-0'>{item.status}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RecentTransaction