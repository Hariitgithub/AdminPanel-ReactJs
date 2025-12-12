import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import React from 'react';
import { profile, search, search1 } from '../../assets/img';
import { driver_details } from '../redux/api/dummyJson';
import RiderApp from '../../components/Dispatchers/RiderApp';

const Dispatchers = () => {
    return (
        <div className="dashRightView home_section trans">
            <div className=' top-search-bar'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Rider App</h4>
            </div>
            <div className='d-flex ac-jb mt-3'>
                <div className="d-flex ac-js p-2 bg-black rounded w-60">
                    <img src={search} alt="" className='search-icon' />
                    <input type="text" placeholder='Search here....' className=' cust-btn ps-2 mb-1 white' />
                </div>
                <div className='p-2 bg-black rounded'>
                    <button className='cust-btn bg-white p-1 rounded green1 f2 mx-2 px-2 '>
                        <AddBoxOutlinedIcon /> Create a new ride
                    </button>
                    <ContactSupportIcon className='white mx-2 pointer' /> <QuestionAnswerIcon className='white mx-2 pointer' />
                    <img src={profile} className='topbar-img mx-2 pointer' alt="" />
                </div>
            </div>
            <div className='d-flex '>
                <div className='bg-black p-3 col-md-5 mt-3 rounded'>
                    <div className='d-flex ac-jb black'>
                        <span className='bg-white rounded p-2 d-flex ac-jc me-2 pointer'>
                            <KeyboardDoubleArrowRightIcon className='arr-bg' /> <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-2">All Drivers</p>
                        </span>
                        <span className='bg-white rounded p-1 d-flex ac-jc me-2 pointer gap-2'>
                            <TuneRoundedIcon className='driver-GrayIcon' />
                            <LocationOnRoundedIcon className='driver-GrayIcon' />
                        </span>
                    </div>
                    <div className="d-flex ac-js white_search mt-3">
                        <img src={search1} alt="" className='search-icon ' />
                        <input type="text" placeholder='Filter by Name' className=' cust-btn ps-2 mb-1 white' />
                    </div>
                    <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 my-3 white'>Driver Name</h2>
                    {driver_details.map((item) => {
                        return (
                            <div className='driver-nameBox d-flex ac-jb mb-2 '>
                                <div className='d-flex gap-2'>
                                    <img src={profile} alt="" className='driver-profile' />
                                    <span className=''>
                                        <h4 className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 white'>{item.driverName}</h4>
                                        <p className='f1 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 primary1'>{item.driverId}</p>
                                    </span>
                                </div>
                                <div>
                                    <div className='d-flex gap-3 black'>
                                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 driver-btnWhite '>C</h2>
                                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 driver-btnWhite '>M</h2>
                                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 driver-btnWhite '>M</h2>
                                    </div>
                                    <div className='d-flex gap-3 mt-2'>
                                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 driver-btnGray err'>88</h2>
                                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 driver-btnGray yellow'>88</h2>
                                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 driver-btnGray green1'>88</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <RiderApp />
            </div>

        </div>
    )
}

export default Dispatchers