import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggleOff, toggleOn } from '../../assets/img';

const Tax = ({ setTab }) => {
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
                <h2 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20'>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Tax & OrderZest Pay</h2>
            </div>
            <h2 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mt-4'>OrderZestPay</h2>
            <div className='d-flex flex-wrap  mb-2 mt-4'>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Merchant ID</h2>
                    <input className='input-fld w-100 mt-2' type='text' />
                </div>
                <div className='col-md-3 px-5'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Online Payments</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left mt-2 ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>GST Number</h2>
                    <input className='input-fld w-100 mt-2' type='text' />
                </div>

            </div>
            <h2 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mt-4'>TAX</h2>
            <div className='d-flex flex-wrap  mb-2 mt-4'>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Display Tax Included Note</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left mt-2 ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 px-5'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>GST</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left mt-2 ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
            </div>
            <div className='d-flex flex-wrap  mb-2 mt-4'>
                <div className='col-md-3 '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>GST Percentage</h2>
                    <input className='input-fld w-100 mt-2' type='text' />
                </div>
                <div className=' px-5'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Add Tax - Delivery Charges</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left mt-2 ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
            </div>

            <div className='mt-5 d-flex ac-jb w-90 pe-2'>

                <button onClick={() => setTab(5)} className='back-btn mt-2'>
                    Back
                </button>
                <button onClick={() => setTab(7)} className='add-btn mt-2'>
                    Next
                </button>
            </div>

        </div>
    )
}

export default Tax