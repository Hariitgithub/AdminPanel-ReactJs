import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';

const AddRecurringSMS = () => {

    const navigate = useNavigate();
    const location=useLocation();
    const type = location?.state?.type;
    return (
        <div className="dashRightView home_section trans">
            <div className='ms-5 d-flex '>
                <div className='pointer' onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div>
               <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 ms-2'> {type == "view" ?  "View" : type == "add" ?"Add" : type == "edit" ? "Edit" : ""}  Recurring SMS/Email</h2> 
            </div>
            <div className='w-90 m-auto'>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Site</h2>
                        <input className='input-fld' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Start  Date</h2>
                        <input className='input-fld' type='date' />
                    </div>
                </div>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>End Date</h2>
                        <input className='input-fld' type='date' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Campaign  </h2>
                        <input className='input-fld' />
                    </div>
                </div>
                <div className='d-flex  mb-2'>

                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>People</h2>
                        <input className='input-fld' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Approve / Decline</h2>
                        <select className='input-fld' >
                            <option>  Approve </option>
                            <option>  Decline </option>
                        </select>
                    </div>
                </div>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Campaign Status</h2>
                        <input className='input-fld' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>SMS Status</h2>
                        <input className='input-fld' />
                    </div>
                </div>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Email Status</h2>
                        <input className='input-fld' type='email' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Reason</h2>
                        <textarea className='input-fld' />
                    </div>
                </div>
                <div className='my-4 d-flex justify-content-end w-90 pe-2'>
                    <button onClick={()=>navigate("/reccurring-sms")} className='add-btn '>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddRecurringSMS