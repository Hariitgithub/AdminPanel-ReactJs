import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import TopBar from '../../components/TopBar/TopBar';
import { Table } from '../../components/Table/Table';
import { useNavigate } from 'react-router-dom';
import { goCardless, oneTimeSms } from '../redux/api/dummyJson';
import { delete_icon, edit_icon, view_icon } from '../../assets/img';

const GoCardLess = () => {
    const navigate = useNavigate();
    const [type, setType] = useState();
    console.log(type,"type");
    
    const [popup, setPopup] = useState();
    const columns = React.useMemo(
        () => [
            {
                Header: "Mandate ID",
                accessor: "name",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Gocardless Auth Payment",
                accessor: "number",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Gocardless OSB Weeks",
                accessor: "text",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },

            {
                Header: "Gocardless OSB Payment",
                accessor: "town",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Gocardless OSB Comments",
                accessor: "forwardEmail",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Standing Order Status",
                accessor: "door",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Cancel Mandate Reason",
                accessor: "city",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Cancel System Rent",
                accessor: "post",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Cancel Mandate",
                accessor: "Created",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Action",
                accessor: "",
                Cell: ({ value, row }) => {
                    return <React.Fragment>
                        <div className='d-flex ac-jc'>
                            <button className='cust-btn' onClick={() => {setPopup(!popup); setType("view")}}>
                                <img src={view_icon} alt="" className='mx-2 view-btn' />
                            </button>
                            <button className='cust-btn ' onClick={() => {setPopup(!popup); (setType("edit"))}}>
                                <img src={edit_icon} alt="" className='mx-2 view-btn ' />
                            </button>
                            <button className='cust-btn  '>
                                <img src={delete_icon} alt="" className='mx-2 view-btn' />
                            </button>
                        </div>
                    </React.Fragment>
                },
            },
        ],
        []
    );

    return (
        <div className="dashRightView home_section trans">
            <div className='d-flex ac-jb top-search-bar'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>GoCardLess</h4>
                <div className='d-flex ac-jc '>
                    <button className='add-bar-btn white ms-3' onClick={() => {setPopup(!popup); (setType("add"))}}>
                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add GoCardLess</p>
                    </button>
                </div>
            </div>
            {popup && (
                <div className='pop-up'>
                    <div className='popup-des w-70 black'>
                        <div className='d-flex ac-jb'>
                            <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 black'>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} GoCardLess</h4>
                            <button onClick={() => setPopup(false)} className='cancl-btn'>X
                            </button>
                        </div>

                        <div className='d-flex gap-3 mt-5'>
                            <div className='col-md-4'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Mandate ID</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='col-md-4'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Gocardless Auth Payment</h2>
                                <div className='d-flex  w-50 ac-js'>
                                    <button className='enable-chk' >On
                                    </button>
                                    <button className='enable-chk' >Off
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Gocardless SOB Weeks</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                        </div>
                        <div className='d-flex gap-3 mt-5'>
                            <div className='col-md-4'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Gocardless SOB Payments</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='col-md-4'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Gocardless SOB Comments</h2>
                                <input className='input-fld w-90' type='text' />

                            </div>
                            <div className='col-md-4'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Standing Order Status</h2>
                                <div className='d-flex  w-50 ac-js'>
                                    <button className='enable-chk' >On
                                    </button>
                                    <button className='enable-chk' >Off
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex gap-3 mt-5 '>
                            <div className='col-md-4'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Cancel Mandate Reason</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='col-md-4'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Cancel System Rent</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='col-md-4'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Cancel Mandate</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                        </div>
                        <div className=' d-flex ac-je mt-3 '>
                            <button onClick={() => setPopup(false)} className='add-btn'>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Table columns={columns} data={goCardless} />
        </div>
    )
}

export default GoCardLess
