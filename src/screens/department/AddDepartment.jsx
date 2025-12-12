import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';


const AddDepartment = () => {
    const location = useLocation();
    const type = location?.state?.type;
    const navigate =  useNavigate();
    return (
        <div className="dashRightView home_section trans">
            <div className='ms-5 d-flex '>
                <div className='pointer' onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div>
                <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 ms-2'>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Department</h2>
            </div>
            <div className='w-90 m-auto'>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Name</h2>
                        <input className='input-fld' type='name' />
                    </div>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Email</h2>
                        <input className='input-fld' type='email' />
                    </div>
                </div>
                <div className='d-flex  mb-2'>
                    <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Department</h2>
                        <input className='input-fld' />
                    </div>
                    {/* <div className='mt-5 ms-5 col-md-4'>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Department  </h2>
                        <input className='input-fld' />
                    </div> */}
                </div>
                <div className='mt-4 d-flex justify-content-end w-90 pe-2'>
                    <button onClick={()=>navigate("/department")} className='add-btn mt-2'>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddDepartment