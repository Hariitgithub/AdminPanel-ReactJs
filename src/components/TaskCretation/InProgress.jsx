import React from 'react'
import { green_noti, green_tool, orange_noti, orange_tool, profile, sample, sample1, todo } from '../../assets/img'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ProgressBar } from 'react-bootstrap'
import { progress_circle, taskProfile } from '../../screens/redux/api/dummyJson';

const InProgress = () => {

    return (
        <>
            <div className='d-flex ac-jb list-btm'>
                <button className='cust-btn d-flex ac-jc'>
                    <ArrowRightIcon />
                    <h2 className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>In Progress</h2>
                </button>
                <button className='cust-btn d-flex ac-jc'>
                    <h2 className='f4 fs-sm-12 fs-md-18 fs-lg-20 fs-xl-24 fs-xxl-26 mb-0'>+</h2>
                    <MoreVertIcon />
                </button>
            </div>
            <div className='prog-cont mt-2'>
                <div className='prog-hash d-flex ac-jb'>
                    <div className='d-flex gap-1 mt-2'>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>#Dribble Shot</p>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 '>#Product</p>
                    </div>
                    <button className='border-0 prog-icon mt-2'>
                        <MoreVertIcon />
                    </button>
                </div>
                <div className='mt-3'>
                    <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Wehiu product task and the task process pages</h2>
                    <div className='w-100 d-flex ac-jc '>
                        <img src={todo} alt='' className='w-70 prog-img' />
                    </div>
                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mt-3 orange1 '>Have to finish this before weekend  </p>
                </div>
                <div className='d-flex ac-jb '>
                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 orange1'>Progress</p>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 me-3 orange1'>90%</h2>
                </div>
                <div className='d-flex'>
                    {progress_circle.map((item, index) => {
                        return (
                            <div className='' key={index}>
                                <button className={item?.type == 1 ? 'activeProgress-circleOrange' : 'progress-circleOrange'}></button>
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
                            <img src={orange_noti} className='notii_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 orange1'>12</h2>
                        </div>
                        <div className='pointer d-flex ac-jc list-num-border'>
                            <img src={orange_tool} className='tool_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 orange1'>8</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='prog-cont1 mt-2'>
                <div className='prog-hash1 d-flex ac-jb'>
                    <div className='d-flex gap-1 mt-2'>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>#mobile app</p>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 '>#Client</p>
                    </div>
                    <button className='border-0 prog-icon1 mt-2'>
                        <MoreVertIcon />
                    </button>
                </div>
                <div className='mt-3'>
                    <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Design CRM shop product page responsive website</h2>

                    {/* <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mt-3'>Note: They like our behance project <span className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20'>Mise</span> </p> */}
                </div>
                <div className='d-flex ac-jb '>
                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 '>Progress</p>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 me-3'>20%</h2>
                </div>
                <div className='d-flex'>
                    {progress_circle.map((item, index) => {
                        return (
                            <div className='' key={index}>
                                <button className={item?.type == 1 ? 'activeProgress-circleGreen' : 'progress-circleGreen'}></button>
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
                            <img src={green_noti} className='notii_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 '>12</h2>
                        </div>
                        <div className='pointer d-flex ac-jc list-num-border'>
                            <img src={green_tool} className='tool_icon' alt="" />
                            <h2 className='f1 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0'>8</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InProgress