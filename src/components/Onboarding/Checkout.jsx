import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggleOff, toggleOn } from '../../assets/img';

const Checkout = ({ setTab }) => {
    const location = useLocation();
    const type = location?.state?.type;
    const navigate = useNavigate();
    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }
    return (

        <div className='w-90 m-auto '>
            <div className='d-flex mt-2'>
                {/* <div className='pointer' onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div> */}
                <h2 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 '>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Checkout Fields</h2>
            </div>
            <div className='d-flex flex-wrap mt-4  mb-2'>
                <div className='d-flex ac-jc'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'>Customers Name on EPOS</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <img className='w-50' src={toggleOn} /> :
                            <img className='w-50' src={toggleOff} />}
                    </button>
                </div>
                <div className='d-flex  ac-jc '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ms-3'>Customers Flat Number on EPOS</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <img className='w-50' src={toggleOn} /> :
                            <img className='w-50' src={toggleOff} />}
                    </button>
                </div>
                <div className='d-flex ac-jc'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ms-3'>Enter Shop Name</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <img className='w-50' src={toggleOn} /> :
                            <img className='w-50' src={toggleOff} />}
                    </button>
                </div>
                <div className='d-flex ac-jc'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ms-3'>Allergy Check</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
            </div>
            <div className='d-flex  gap-3 mb-2'>
                <div className='d-flex  mt-5 col-md-5 align-items-center'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16  text-nowrap pe-2'>Change Calculator</h2>
                    <input className='input-fld w-50 ms-2' placeholder='285.39' type='number' />
                </div>
                <div className='d-flex  mt-5 col-md-5 align-items-center  '>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 text-nowrap pe-2'>Paid Status on Recepit</h2>
                    <input className='input-fld w-50 ms-2' type='text' />
                </div>
            </div>
            <div className='d-flex  gap-3 mb-2'>
                <div className='d-flex  mt-5 col-md-5 align-items-center'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 text-nowrap pe-2'>Delivery Charge Type</h2>
                    <textarea className='input-fld w-50 ms-2 ' placeholder='Delivery by Zone or Advanced Post Code Delivery' type='name' />
                </div>
                <div className='d-flex  mt-5 col-md-5 align-items-center'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 text-nowrap pe-2'>Enable / Disable</h2>
                    <div className='d-flex ms-2 gap-1 w-50'>
                        <button className='enable-chk' >Yes
                        </button>
                        <button className='enable-chk' >No
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-4 d-flex ac-jb w-90 pe-2'>
                <button onClick={() => setTab(0)} className='back-btn mt-2'>
                    Back
                </button>
                <button onClick={() => setTab(2)} className='add-btn mt-2'>
                    Next
                </button>
            </div>

        </div>
    )
}

export default Checkout