import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { search, toggleOff, toggleOn } from '../../assets/img';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, useNavigate } from 'react-router-dom';
import Table from '../Table';
import TopBar from '../../components/TopBar/TopBar';

const Dashboard = () => {



    return (
        <div className="dashRightView home_section trans">
           
            <div className='d-flex ac-jb top-search-bar'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Dashboard</h4>
                <div className='d-flex ac-jc '>
                    {/* <div className="d-flex ac-jb ps-2 border-search">
                        <img src={search} alt="" className='search-icon' />
                        <input placeholder='Search here....' className='cust-btn ps-2 mb-1 white' />
                    </div> */}
                    {/* <button className='role-btn white ms-3' onClick={() => navigate("/add-reccurring-sms")}>
                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Dashboard</p>
                    </button> */}

                </div>
            </div>
            <div>
                <Table />
            </div>

        </div>
    )
}

export default Dashboard