import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';

const AddOwnerDetails = ({ setTab }) => {
    const location = useLocation();
    const type = location?.state?.type;
    const navigate = useNavigate();
    return (
        <div className='w-90 m-auto '>
            <div className=' d-flex mt-2'>
                {/* <div className='pointer'>
                    <ArrowBackIcon />
                </div> */}
                <h2 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 '>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Owner Details</h2>
            </div>
            <div className='d-flex justify-content-between gap-3 mb-2'>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>First  Name</h2>
                    <input className='input-fld' type='name' />
                </div>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Last Name</h2>
                    <input className='input-fld' type='number' />
                </div>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Email ID   </h2>
                    <input className='input-fld' type='text' />
                </div>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Phone Number</h2>
                    <input className='input-fld' type='email' />
                </div>
            </div>
            <div className='d-flex gap-3 mb-2'>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Door Number</h2>
                    <input className='input-fld' type='email' />
                </div>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Street</h2>
                    <input className='input-fld' type='number' />
                </div>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Town</h2>
                    <input className='input-fld' type='name' />
                </div>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>City</h2>
                    <input className='input-fld' type='text' />
                </div>
            </div>
            <div className='d-flex gap-3 mb-2'>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Post Code</h2>
                    <input className='input-fld' type='text' />
                </div>
                <div className='mt-5  col-md-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Generate</h2>
                    <input className='input-fld' type='number' />
                </div>
            </div>
            <div className='mt-4 d-flex ac-jb w-90 pe-2'>
                <button className='back-btn mt-2' onClick={() => navigate(-1)}>
                    Back
                </button>
                <button onClick={() => setTab(1)} className='add-btn mt-2'>
                    Next
                </button>
            </div>
        </div>
    )
}

export default AddOwnerDetails