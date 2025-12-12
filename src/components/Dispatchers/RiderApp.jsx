import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import DoDisturbAltRoundedIcon from '@mui/icons-material/DoDisturbAltRounded';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { profile } from '../../assets/img';


const RiderApp = () => {
    return (
        <div className='col-md-7'>
            <div className='bg-primar p-2 mt-3 ms-2'>
                <div className='d-flex ac-jb mt-3'>
                    <div className='d-flex  gap-2'>
                        <img src={profile} alt="" className='driver-profile' />
                        <span className=''>
                            <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 white'>Robert Wade</h4>
                            <p className='f2 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white mb-0'>01:00 PM Monday 12th March 2024</p>
                        </span>
                    </div>
                    <div className='p-2 bg-black rounded d-flex gap-3 ac-jc'>
                        <FileUploadOutlinedIcon className='driver-GrayIcon' />
                        <CallOutlinedIcon className='driver-GrayIcon' />
                        <SettingsRoundedIcon className='driver-GrayIcon' />
                        <button className="p-1 bg-white rounded  err cust-btn ">
                            <DoDisturbAltRoundedIcon />
                            Cancel Ride
                        </button>
                    </div>
                </div>
                <div className='d-flex ac-jb mt-2 black'>
                    <div className=" white_search mt-3 w-40">
                        <h4 className='f3 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Current Location</h4>
                        <p className='f2 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-12 fs-xxl-14 '>15, Sterlling Road, Downtown, Texas</p>
                    </div>
                    <div className=" white_search mt-3 w-40 mx-2">
                        <h4 className='f3 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 '>Driver Name & ID</h4>
                        <p className='f2 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-12 fs-xxl-14 mb-0'>Robert Wade</p>
                        <p className='f2 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-12 fs-xxl-14  '>#2589</p>
                    </div>
                    <div className=" white_search mt-3 w-40">
                        <h4 className='f3 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 '>Delivery Location</h4>
                        <p className='f2 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-12 fs-xxl-14 '>15, Sterlling Road, Downtown, Texas</p>
                    </div>
                </div>
            </div>
            <div className='ms-2'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6766253.747475409!2d74.94929180802608!3d14.950416282233164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e9!4m5!1s0x3a52671c0b3a2bb9%3A0x16a14b1deec3ada3!2sNINOS%20IT%20SOLUTION%20PVT.LTD%2C%20Arcot%20Road%2C%20Ottagapalayam%2C%20Kannika%20Puram%2C%20Vadapalani%2C%20Chennai%2C%20Tamil%20Nadu!3m2!1d13.0486039!2d80.2080891!4m5!1s0x3bae14f13f1f312d%3A0x490fdf03dd2dcb5d!2sSilk%20Board%20junction%2C%20Sector%206%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!3m2!1d12.916571399999999!2d77.6233827!5e0!3m2!1sen!2sin!4v1724308009142!5m2!1sen!2sin"
                 className='map-dark'   width="626" height="580" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default RiderApp