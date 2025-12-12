import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { taskProfile } from '../../screens/redux/api/dummyJson';
import { blue1_noti, blue1_tool, blue2_noti, blue2_tool, orange_noti, orange_tool, pink_noti, pink_tool } from '../../assets/img';

const InReview = () => {

    return (
        <>
            <div className='d-flex ac-jb list-btm'>
                <button className='cust-btn d-flex ac-jc'>
                    <ArrowRightIcon />
                    <h2 className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>In Review</h2>
                </button>
                <button className='cust-btn d-flex ac-jc'>
                    <h2 className='f4 fs-sm-12 fs-md-18 fs-lg-20 fs-xl-24 fs-xxl-26 mb-0'>+</h2>
                    <MoreVertIcon />
                </button>
            </div>
            <div className='rev-cont mt-2'>
                <div className='rev-hash d-flex ac-jb'>
                    <div className='d-flex gap-1 mt-2'>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>#Development</p>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 '>#Client</p>
                    </div>
                    <button className='border-0 rev-icon mt-2'>
                        <MoreVertIcon />
                    </button>
                </div>
                <div className='mt-3'>
                    <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Orypto product landing page create in webflow</h2>
                </div>

                <div className='d-flex ac-jb mt-3'>
                    <div className='pointer list-profile'>
                        {taskProfile?.map((item) => {
                            return (
                                <img src={item?.profileImg} alt="" />
                            )
                        })}
                    </div>
                    <div className='d-flex gap-2'>
                        <div className='pointer d-flex list-num-border'>
                            <img src={pink_noti} className='notii_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 '>6</h2>
                        </div>
                        <div className='pointer d-flex ac-jc list-num-border'>
                            <img src={pink_tool} className='tool_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>1</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rev-cont1 mt-2'>
                <div className='rev-hash1 d-flex ac-jb'>
                    <div className='d-flex gap-1 mt-2'>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>#Development</p>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 '>#Client</p>
                    </div>
                    <button className='border-0 rev-icon1 mt-2'>
                        <MoreVertIcon />
                    </button>
                </div>
                <div className='mt-3'>
                    <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Natverk video platform web app design and develop</h2>
                </div>

                <div className='d-flex ac-jb mt-3'>
                    <div className='pointer list-profile'>
                        {taskProfile?.map((item) => {
                            return (
                                <img src={item?.profileImg} alt="" />
                            )
                        })}
                    </div>
                    <div className='d-flex gap-2'>
                        <div className='pointer d-flex list-num-border'>
                            <img src={blue1_noti} className='notii_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 '>12</h2>
                        </div>
                        <div className='pointer d-flex ac-jc list-num-border'>
                            <img src={blue1_tool} className='tool_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>8</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rev-cont2 mt-2'>
                <div className='rev-hash2 d-flex ac-jb'>
                    <div className='d-flex gap-1 mt-2'>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>#Development</p>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 '>#Client</p>
                    </div>
                    <button className='border-0 rev-icon2 mt-2'>
                        <MoreVertIcon />
                    </button>
                </div>
                <div className='mt-3'>
                    <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Wehiu product task and the task process pages</h2>
                </div>
                <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mt-3 orange1 '>Note: We have a meeting 3:12AM</p>
                <div className='d-flex ac-jb mt-3'>
                    <div className='pointer list-profile'>
                        {taskProfile?.map((item) => {
                            return (
                                <img src={item?.profileImg} alt="" />
                            )
                        })}
                    </div>
                    <div className='d-flex gap-2'>
                        <div className='pointer d-flex list-num-border'>
                            <img src={orange_noti} className='notii_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 orange1'>6</h2>
                        </div>
                        <div className='pointer d-flex ac-jc list-num-border'>
                            <img src={orange_tool} className='tool_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 orange1'>1</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rev-cont3 mt-2'>
                <div className='rev-hash3 d-flex ac-jb'>
                    <div className='d-flex gap-1 mt-2'>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>#Development</p>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 '>#Client</p>
                    </div>
                    <button className='border-0 rev-icon3 mt-2'>
                        <MoreVertIcon />
                    </button>
                </div>
                <div className='mt-3'>
                    <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Ginko Mobile App Design</h2>
                </div>

                <div className='d-flex ac-jb mt-3'>
                    <div className='pointer list-profile'>
                        {taskProfile?.map((item) => {
                            return (
                                <img src={item?.profileImg} alt="" />
                            )
                        })}
                    </div>
                    <div className='d-flex gap-2'>
                        <div className='pointer d-flex list-num-border'>
                            <img src={blue2_noti} className='notii_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 '>12</h2>
                        </div>
                        <div className='pointer d-flex ac-jc list-num-border'>
                            <img src={blue2_tool} className='tool_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>8</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InReview