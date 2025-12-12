import React, { useState } from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ProgressBar } from 'react-bootstrap'
import { progress_circle, taskProfile } from '../../screens/redux/api/dummyJson';
import { blue1_noti, blue1_tool, blue2_noti, blue2_tool, red_noti, red_tool, tick_icon, untick_icon } from '../../assets/img';

const TodoListTask = () => {
    const [tick, setTick] = useState(false);
    const checkCircle = () => {
        setTick(!tick);
    }

    return (
        <div className=''>
            <div className='d-flex ac-jb list-btm '>
                <button className='cust-btn d-flex ac-jc'>
                    <ArrowRightIcon />
                    <h2 className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 '>Todo List</h2>
                </button>
                <button className='cust-btn d-flex ac-jc'>
                    <h2 className='f4 fs-sm-12 fs-md-18 fs-lg-20 fs-xl-24 fs-xxl-26 mb-0'>+</h2>
                    <MoreVertIcon />
                </button>
            </div>
            <div className='list-cont mt-2'>
                <div className='list-hash d-flex ac-jb'>
                    <div className='d-flex gap-1 mt-2'>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>#website</p>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 '>#client</p>
                    </div>
                    <button className='border-0 list-icon mt-2'>
                        <MoreVertIcon />
                    </button>
                </div>
                <div className='mt-3'>
                    <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Search inspiration for upcoming project</h2>
                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mt-3'>Note: They like our behance project <span className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Mise</span> </p>
                </div>
                <div className='d-flex ac-jb '>
                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 '>Progress</p>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 me-3'>40%</h2>
                </div>
                <div className='d-flex'>
                    {progress_circle.map((item, index) => {
                        return (
                            <div className='' key={index}>
                                <button className={item?.type == 1 ? 'activeProgress-circle' : 'progress-circle'}></button>
                            </div>
                        )
                    })}
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
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>12</h2>
                        </div>
                        <div className='pointer d-flex ac-jc list-num-border'>
                            <img src={blue1_tool} className='tool_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>8</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='list-cont1 mt-2'>
                <div className='list-hash2 d-flex ac-jb'>
                    <div className='d-flex gap-1 mt-2'>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>#website</p>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 '>#client</p>
                    </div>
                    <button className='border-0 list-icon1 mt-2'>
                        <MoreVertIcon />
                    </button>
                </div>
                <div className='mt-3'>
                    <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Ginko Mobile App Design</h2>
                    <div className='d-flex a-bl'>
                        <button onClick={checkCircle} className='toggle-btn' >
                            {tick ?
                                <img src={tick_icon} className='check_circle' alt="" /> :
                                <img src={untick_icon} className='check_circle' alt="" />
                            }
                        </button>
                        <p className='f2 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 ms-1'>Create user flow</p>
                    </div>
                    <div className='d-flex a-bl'>
                        <button onClick={checkCircle} className='toggle-btn' >
                            {tick ?
                                <img src={tick_icon} className='check_circle' alt="" /> :
                                <img src={untick_icon} className='check_circle' alt="" />
                            }
                        </button>
                        <p className='f2 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 ms-1'>Make wireframe</p>
                    </div>
                    <div className='d-flex a-bl'>
                        <button onClick={checkCircle} className='toggle-btn' >
                            {tick ?
                                <img src={tick_icon} className='check_circle' alt="" /> :
                                <img src={untick_icon} className='check_circle' alt="" />
                            }
                        </button>
                        <p className='f2 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 ms-1'>Design onboarding screens</p>
                    </div>
                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mt-3'>Note: We have a metting <span className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>2:34 AM </span> </p>
                </div>
                <div className='d-flex ac-jb '>
                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 '>Progress</p>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 me-3'>20%</h2>
                </div>
                <div className='d-flex'>
                    {progress_circle.map((item, index) => {
                        return (
                            <div className='' key={index}>
                                <button className={item?.type == 1 ? 'activeProgress-circleblue' : 'progress-circleblue'}></button>
                            </div>
                        )
                    })}
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
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>7</h2>
                        </div>
                        <div className='pointer d-flex ac-jc list-num-border'>
                            <img src={blue2_tool} className='tool_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>2</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='list-cont2 mt-2'>
                <div className='list-hash1 d-flex ac-jb'>
                    <div className='d-flex gap-1 mt-2'>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>#website</p>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 '>#client</p>
                    </div>
                    <button className='border-0 list-icon2 mt-2'>
                        <MoreVertIcon />
                    </button>
                </div>
                <div className='mt-3'>
                    <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Search inspiration for upcoming project</h2>
                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mt-3'>Note: They like our behance project <span className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Mise</span> </p>
                </div>
                <div className='d-flex ac-jb '>
                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 '>Progress</p>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 me-3'>40%</h2>
                </div>
                <div className='d-flex'>
                    {progress_circle.map((item, index) => {
                        return (
                            <div className='' key={index}>
                                <button className={item?.type == 1 ? 'activeProgress-circleRed' : 'progress-circleRed'}></button>
                            </div>
                        )
                    })}
                </div>
                <div className='d-flex ac-jb mt-3'>
                    <div className='pointer list-profile'>
                        {taskProfile?.map((item) => {
                            return (
                                <img src={item?.profileImg} alt="" />
                            )
                        })}
                    </div>
                    <div className='pointer d-flex gap-2'>
                        <div className='pointer d-flex list-num-border'>
                            <img src={red_noti} className='notii_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>12</h2>
                        </div>
                        <div className='pointer d-flex ac-jc list-num-border'>
                            <img src={red_tool} className='tool_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>8</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoListTask