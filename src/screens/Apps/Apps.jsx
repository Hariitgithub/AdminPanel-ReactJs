import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import TopBar from '../../components/TopBar/TopBar';
import { delete_icon, edit_icon, toggleOff, toggleOn, view_icon } from '../../assets/img';
import { goCardless } from '../redux/api/dummyJson';
import { Table } from '../../components/Table/Table';

const Apps = () => {
    const [popup, setPopup] = useState();
    const [type, setType] = useState();

    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }


    const columns = React.useMemo(
        () => [
            {
                Header: "Android App Link",
                accessor: "name",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "iOS App Link",
                accessor: "number",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Others",
                accessor: "text",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },

            {
                Header: "Ask for Post Code First-Website",
                accessor: "town",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Ask for Post Code Search Address",
                accessor: "forwardEmail",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Cash on Epos",
                accessor: "door",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Cash on Website",
                accessor: "street",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Extra Page on Website",
                accessor: "city",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Takeaway / Restaurant Status",
                accessor: "fb",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Status Automation",
                accessor: "gbm",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Do not Contact for Merchandise",
                accessor: "sync",
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
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Apps</h4>
                <div className='d-flex ac-jc '>
                    <button className='add-bar-btn white ms-3'onClick={() => {setPopup(!popup); (setType("add"))}}>
                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Apps</p>
                    </button>
                </div>
            </div>
            {popup && (
                <div className='pop-up'>
                    <div className='popup-des w-80 h-70 black'>
                        <div className='d-flex ac-jb'>
                            <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 '>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Apps</h4>
                            <button onClick={() => setPopup(false)} className='cancl-btn'>X
                            </button>
                        </div>
                        <div className='d-flex ae-jb mt-4'>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Android App Link</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>iOS App Link</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Others</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Ask for Post Code First-Website</h2>
                                <div className='d-flex  w-50 '>
                                    <button className='enable-chk' >Yes
                                    </button>
                                    <button className='enable-chk' >No
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex ae-jb mt-5 '>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Ask for Post Code Search Address</h2>
                                <button onClick={handleChange}
                                    className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                    {isToggled ?
                                        <div><img className='w-50' src={toggleOn} /></div> :
                                        <div><img className='w-50' src={toggleOff} /></div>}
                                </button>
                            </div>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Cash on Epos</h2>
                                <button onClick={handleChange}
                                    className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                    {isToggled ?
                                        <div><img className='w-50' src={toggleOn} /></div> :
                                        <div><img className='w-50' src={toggleOff} /></div>}
                                </button>
                            </div>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Cash on Website</h2>
                                <button onClick={handleChange}
                                    className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                    {isToggled ?
                                        <div><img className='w-50' src={toggleOn} /></div> :
                                        <div><img className='w-50' src={toggleOff} /></div>}
                                </button>
                            </div>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Extra Page on Website</h2>
                                <div className='d-flex  w-50 '>
                                    <button className='enable-chk' >On
                                    </button>
                                    <button className='enable-chk' >Off
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex ae-js mt-5 '>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Takeaway / Restaurant Status</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Status Automation</h2>
                                <input className='input-fld w-90' type='text' />
                            </div>
                            <div className='col-md-3 p-2'>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Do not Contact for Merchandise</h2>
                                <div className='d-flex  w-50 '>
                                    <button className='enable-chk' >Yes
                                    </button>
                                    <button className='enable-chk' >No
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' d-flex ac-je mt-4 '>
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

export default Apps