import React, { useState } from 'react'
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { roles } from '../redux/api/dummyJson';
import { Table } from '../../components/Table/Table';
import { edit_icon, edit_Primary } from '../../assets/img';


const DriverDetails = () => {
    const [popup, setPopup] = useState();
    const columns = React.useMemo(
        () => [
            {
                Header: "Driver Name",
                accessor: "name",
                Cell: ({ value, row }) => {
                    return (
                        <div className='d-flex ac-jc'>
                            <input type='checkbox' className='me-2 bg-black pointer' />
                            <p className='mb-0 col-md-3'>{value}</p>
                        </div>
                    )
                },
            },
            {   
                Header: "Company Name",
                accessor: "company",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>
                },
            },
            {
                Header: "Action",
                accessor: "",
                Cell: ({ value, row }) => {
                    return <React.Fragment>
                        <button onClick={() => setPopup(!popup)} className='cust-btn d-flex ac-jc w-100'>
                            <img src={edit_Primary} alt="" className='mx-2 view-btn ' />
                        </button>
                    </React.Fragment>
                },
            },
        ],
    );
    return (
        <div className="dashRightView home_section trans">
            {popup && (
                <div className='pop-up'>
                    <div className='popup-des black'>
                        <div className='d-flex ac-jb'>
                            <h2 className='f3 fs-sm-12 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 '>Edit Driver Details</h2>
                            <button onClick={() => setPopup(false)} className='cancl-btn'>X
                            </button>
                        </div>
                        <div className='d-flex gap-3 my-3 flex-wrap '>
                            <div className='w-100 mt-4'>
                                <h2 className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 mb-2'>Driver Name</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='w-100 mt-3'>
                                <h2 className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 mb-2'>Company Name</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='w-100 mt-3'>
                                <h2 className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 mb-2'>Status</h2>
                                <select className='input-fld w-90' >
                                    <option>Active</option>
                                    <option>InActive</option>
                                </select>
                            </div>
                            <div className='w-90 d-flex ac-jc mt-3'>
                                <button  onClick={() => setPopup(false)} className='border-0 bg-black border-10 p-2 px-3 f2 white'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='d-flex ac-jb top-search-bar '>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Drivers List</h4>
                <div className='d-flex ac-jc '>
                    <h2 className='f2 fs-sm-12 fs-md-14 fs-lg-15 fs-xl-16 fs-xxl-18 pe-4 lt-gray pointer'>Home &gt;Drivers List</h2>
                </div>
            </div>
            <Table columns={columns} data={roles} hide={"hide"} />
        </div>
    )
}

export default DriverDetails