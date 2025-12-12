import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';

const AddWaiterAssign = () => {
    const location = useLocation();
    const type = location?.state?.type;
    const navigate = useNavigate();
  return (
    <div className="dashRightView home_section trans">
    <div className='ms-5 d-flex '>
        <div className='pointer' onClick={() => navigate(-1)}>
            <ArrowBackIcon />
        </div>
        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 ms-2'>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""}  Waiter Task Assign</h2>
    </div>
    <div className='w-90 m-auto'>
        <div className='  mb-2'>
            <div className='mt-5 ms-5 col-md-4'>
                <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Table Attender</h2>
                <select className='input-fld' type='name' >
                    <option>Waiter01</option>
                    <option>Waiter02</option>
                    <option>Waiter03</option>
                    <option>Waiter04</option>
                </select>
            </div>

            <div className='mt-5 ms-5 col-md-4'>
                <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Assign</h2>
                <select className='input-fld' type='name'>
                    <option>Vishwa</option>
                    <option>Hari</option>
                    <option>Abinesh</option>
                    <option>Sathish</option>
                </select>
            </div>
        </div>
        <div className='mt-4 d-flex justify-content-end w-90 pe-2'>
            <button onClick={()=>navigate("/waiter-assign")} className='add-btn mt-2'>
                Add
            </button>
        </div>

    </div>

</div>
  )
}

export default AddWaiterAssign