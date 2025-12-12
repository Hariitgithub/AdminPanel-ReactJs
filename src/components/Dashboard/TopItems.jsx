import React from 'react'
import { topItems } from '../../screens/redux/api/dummyJson'
import { profile } from '../../assets/img'

const TopItems = () => {
    return (
        <div className='border-outline mt-3'>
            <h4 className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 '>Top Items</h4>
            <p className='f1  fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  gray1 text-nowrap'>Based on sales and rate</p>
            {topItems.map((item) => {
                return (
                    <div className='mt-2 bg-primar p-2 border-15 d-flex ac-jb pointer topItem-dash'>
                        <div className='d-flex'>
                            <div className='top-items'>
                                <img src={profile} alt="" className='me-2' />
                            </div>
                            <span>
                                <h4 className='f2 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 white text-nowrap mb-0'>{item.items}</h4>
                                <p className='f2  fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 gray1 text-nowrap mb-0'>Sold {item.sold}</p>
                            </span>
                        </div>
                        <h4 className='f2 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 white ps-3 mb-0'>{item.price}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default TopItems