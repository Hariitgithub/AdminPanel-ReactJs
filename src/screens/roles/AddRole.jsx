import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';

const AddRole = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const type = location?.state?.type;
    return (
        <div className="dashRightView home_section trans">
            <div className='ms-5 d-flex '>
                <div className='pointer' onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div>
                <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 ms-2 mb-0'>{type == "add" ? "Add " : type == "view" ? "View " : type == "edit" ? "Edit" : ""} Role</h2>
            </div>
            <div className='w-90 m-auto'>
                <div className="d-flex w-50 mt-3">
                    <select className='input-fld'>
                        <option >Dashboard</option>
                        <option >Roles</option>
                        <option >Admins</option>
                    </select>
                    <input className='input-fld ms-2' placeholder='Create Department/Roles' type='text' />
                </div>
                <div className='mt-5 d-flex ac-jb w-90'>
                    <div>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Dashboard</h2>
                        <label className='d-flex mt-3  pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-LIST-DASHBOARD</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-ADD-DASHBOARD</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-EDIT-DASHBOARD</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-VIEW-DASHBOARD</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-DELETE-DASHBOARD</p>
                        </label>
                    </div>
                    <div>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Roles</h2>
                        <label className='d-flex mt-3  pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-LIST-ROLES</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-ADD-ROLES</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-EDIT-ROLES</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-VIEW-ROLES</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-DELETE-ROLES</p>
                        </label>
                    </div>
                    <div>
                        <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22'>Admins</h2>
                        <label className='d-flex mt-3  pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-LIST-ADMINS</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-ADD-ADMINS</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-EDIT-ADMINS</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-VIEW-ADMINS</p>
                        </label>
                        <label className='d-flex mt-3 pointer'>
                            <input type='checkbox' />
                            <p className='f1 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-15 fs-xxl-16 mb-0 ps-3'>CAN-DELETE-ADMINS</p>
                        </label>
                    </div>
                </div>
                <div className='my-4 d-flex justify-content-end w-90 pe-2'>
                    <button onClick={()=>navigate("/roles")} className='add-btn '>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddRole