import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggleOff, toggleOn } from '../../assets/img';

const AdvancedSettings = ({ setTab }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const type = location?.state?.type;
    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }
    return (
        <div className=' w-90 m-auto'>
            <div className='d-flex mt-2'>
                {/* <div className='pointer' onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div> */}
                <h2 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 ms-3'>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""}  Advance Settings</h2>
            </div>
            <div className='d-flex flex-wrap  mb-2 mt-5'>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Order Conformation SMS</h2>
                    <div className='d-flex  w-50 ac-js'>
                        <button className='enable-chk' >Yes
                        </button>
                        <button className='enable-chk' >No
                        </button>
                    </div>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>SMS Content for Instore Orders</h2>
                    <input className='input-fld w-100' type='number' />
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Takeaway Display Name</h2>
                    <input className='input-fld w-100' placeholder='Restaurant' type='text' />
                </div>
            </div>
            <div className='d-flex flex-wrap  mb-2 mt-5'>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Send Email</h2>
                    <input className='input-fld w-100' placeholder='Order Confirmation' type='email' />
                </div>
                <div className=' px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Conformation SMS Table Booking</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
            </div>
            <div className='d-flex flex-wrap   mb-2 mt-5'>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Order Reminder SMS Paid by</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>

                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Discount type</h2>
                    <input className='input-fld w-100' placeholder='item or percent' type='text' />
                </div>
            </div>
            <div className='mt-5 d-flex ac-jb w-90 pe-2'>
                <button onClick={() => setTab(3)} className='back-btn mt-2'>
                    Back
                </button>
                <button onClick={() => setTab(5)} className='add-btn mt-2'>
                    Next
                </button>
            </div>

        </div>
    )
}

export default AdvancedSettings