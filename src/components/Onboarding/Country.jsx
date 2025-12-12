import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';

const Country = ({setTab}) => {
    const location = useLocation();
    const type = location?.state?.type;
    const navigate = useNavigate();
    return (
            <div className='w-90 m-auto '>
                <div className='d-flex mt-2'>
                    {/* <div className='pointer' onClick={() => navigate(-1)}>
                        <ArrowBackIcon />
                    </div> */}
                    <h2 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20  '>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""}  Country Fields</h2>
                </div>
                <div className='d-flex ac-jb mt-5  col-md-5'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Country</h2>
                    <input className='input-fld w-70' type='name' />
                </div>
                <div className='d-flex ac-jb mt-5  col-md-5'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Currency</h2>
                    <input className='input-fld w-70' type='name' />
                </div>
                <div className='d-flex ac-jb mt-5  col-md-5'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Region</h2>
                    <input className='input-fld w-70' type='name' />
                </div>
                <div className='mt-4 d-flex ac-jb w-90 pe-2'>

                    <button onClick={()=>setTab(1)} className='back-btn mt-2'>
                        Back
                    </button>
                    <button onClick={()=>setTab(3)} className='add-btn mt-2'>
                        Next
                    </button>
                </div>

            </div>
    )
}

export default Country