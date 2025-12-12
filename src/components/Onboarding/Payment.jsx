import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggleOff, toggleOn } from '../../assets/img';

const Payment = ({ setTab }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const type = location?.state?.type;
    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }
    const finish = () => {
        navigate("/onboarding");
    }
    return (

        <div className=' w-90 m-auto'>
            <div className='d-flex mt-2'>
                {/* <div className='pointer' onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div> */}
                <h2 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 '>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Payment</h2>
            </div>
            <div className='d-flex flex-wrap  mb-2 mt-4 gap-5'>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Service Charge Charged by</h2>
                    <input className='input-fld w-100' placeholder='orderzestpay / client' type='name' />
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Service Charge Online Orders</h2>
                    <input className='input-fld w-100' placeholder='value must not exceed more than 1' type='name' />
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Service Charge Restaurant</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Service Charge Restaurant Set Value</h2>
                    <input className='input-fld w-100' placeholder='20P' type='name' />
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Order Confirmation SMS</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Items Per Carry Bag</h2>
                    <input className='input-fld w-100' type='name' />
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Carry Bag Charges</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Price Per Bag</h2>
                    <input className='input-fld w-100' type='text' />
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Additional Charges</h2>
                    <input className='input-fld w-100' placeholder='display/ complete' type='text' />
                </div>
                <div className='col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Payment Provider</h2>
                    <input className='input-fld w-100' type='text' />
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>SSI</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>

            </div>

            <div className='mt-5 d-flex ac-jb w-90 pe-2'>

                <button onClick={() => setTab(6)} className='back-btn mt-2'>
                    Back
                </button>
                <button onClick={finish} className='finish-btn mt-2'>
                    Finish
                </button>
            </div>

        </div>

    )
}

export default Payment