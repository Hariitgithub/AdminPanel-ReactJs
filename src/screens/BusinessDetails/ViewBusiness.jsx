import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ViewBusiness = () => {
    const location = useLocation();
    const type = location?.state?.type;
    const navigate = useNavigate();
    return (
        <div className="dashRightView home_section trans">
            <div className='ms-5 d-flex '>
                <div className='pointer' onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div>
                <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 ms-2'>{type == "view" ? "View " : type == "edit " ? "Edit" : type == "add" ? "Add "  : ""}Business Details</h2>
            </div>
            <div className='w-90 m-auto mb-5'>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Business Name</h2>
                        <input className='input-fld' type='name' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Register Mobile  Number</h2>
                        <input className='input-fld' type='number' />
                    </div>
                </div>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Send Order Via Text</h2>
                        <select className='input-fld' type='text' >
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Info Email Address</h2>
                        <input className='input-fld' type='email' />
                    </div>
                </div>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Forwarded Email Address</h2>
                        <input className='input-fld' type='email' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Door Number</h2>
                        <input className='input-fld' type='number' />
                    </div>
                </div>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Street</h2>
                        <input className='input-fld' type='name' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Town</h2>
                        <input className='input-fld' type='text' />
                    </div>
                </div>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>City</h2>
                        <input className='input-fld' type='text' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Post Code</h2>
                        <input className='input-fld' type='number' />
                    </div>
                </div>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Generate</h2>
                        <input className='input-fld' type='name' />
                    </div>
                </div>
                <div className='mt-4 d-flex justify-content-end w-90 pe-2'>
                    <button onClick={()=>navigate("/business-details")} className='add-btn mt-2'>
                        Add
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ViewBusiness