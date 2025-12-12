import React from 'react'
import TopBarConst from '../../components/TopBarConst/TopBarConst'
import { bell_icon, Manage, notes_icon, search, search1, setting, share } from '../../assets/img'
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HelpIcon from '@mui/icons-material/Help';

const PrinterProfile = () => {
    return (
        <div className="dashRightView home_section trans">
            <div className='d-flex ac-jb print-bar ms-2'>
                <p className="f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0  white   p-2">Device Management</p>
                <div className='d-flex '>
                    <div className="d-flex align-items-center ps-2 border-search1 me-2">
                        <img src={search1} alt="" className='search-icon' />
                        <input type="text" placeholder='Search here....' className=' cust-btn ps-2 mb-1 ' />
                    </div>
                    <div >
                    <img src={notes_icon} className='print-icon' alt="" /> <img src={bell_icon} className='print-icon' alt="" /> <HelpIcon className='print-icon black' />
                    </div>
                </div>
            </div>

            <div className='w-70 m-auto my-5'>
                <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 border-top  white bg-black p-3 ps-4">Alcoholic Beverages</p>
                <div className='print-box pt-5'>
                    <p className="f2 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0  white   p-2">Easily Setup printers to print  receipts, <br></br>
                        order tickets, or labels</p>
                        <div className='d-flex ac-ja mt-4 black'>
                            <div className='share-box'>
                                <img src={setting} alt="" className='printbox-icon ' />
                                <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  p-2">Share settings across multiple printers</p>
                            </div>
                            <div className='share-box'>
                                <img src={share} alt="" className='printbox-icon ' />
                                <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  p-2">Share settings across different locations</p>
                            </div>
                            <div className='share-box'>
                                <img src={Manage} alt="" className='printbox-icon ' />
                                <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  p-2">Manage settings from a centralized place</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3 ac-jc mt-3 py-5'>
                        <button className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 create-prnt p-2">Create</button>
                        <button className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 create-prnt p-2">Learn More</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PrinterProfile
