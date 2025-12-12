import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table } from '../../components/Table/Table';
import { goCardless } from '../redux/api/dummyJson';
import TopBar from '../../components/TopBar/TopBar';
import { delete_icon, edit_icon, toggleOff, toggleOn, view_icon } from '../../assets/img';

const Delivery = () => {
    const [popup, setPopup] = useState();
    const [type, setType] = useState();

    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }

    const columns = React.useMemo(
        () => [
            {
                Header: "Self Assign Orders (Dispatch App)",
                accessor: "name",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Driver Selection Epos Settings",
                accessor: "number",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "GPS Tracking",
                accessor: "text",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },

            {
                Header: "GPS Update Time",
                accessor: "town",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Assign Order to Drive Through",
                accessor: "forwardEmail",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Maximum Delivery Miles",
                accessor: "door",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Max Delivery Radius",
                accessor: "street",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Hybrid Delivery",
                accessor: "city",
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
            <div>
                <div className='d-flex ac-jb top-search-bar'>
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Delivery</h4>
                    <div className='d-flex ac-jc '>
                        <button className='add-bar-btn white ms-3' onClick={() => {setPopup(!popup); (setType("add"))}}>
                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Delivery</p>
                        </button>
                    </div>
                </div>
                {popup && (
                    <div className='pop-up'>
                        <div className='popup-des w-70 h-70 black'>
                            <div className='d-flex ac-jb'>
                                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 '>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Delivery</h4>
                                <button onClick={() => setPopup(false)} className='cancl-btn'>X
                                </button>
                            </div>
                            <div className='d-flex ac-jb mt-4'>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Self Assign Orders (Dispath App)</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Driver Selection Epos Settings</h2>
                                    <div className='d-flex  w-50 '>
                                        <button className='enable-chk' >YES
                                        </button>
                                        <button className='enable-chk' >NO
                                        </button>
                                    </div>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>GPS Tracking</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>GPS Update Time</h2>
                                    <input className='input-fld w-90' type='time' />
                                </div>
                            </div>
                            <div className='d-flex ac-jb mt-5 '>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Assign Order to Drive Through</h2>
                                    <input className='input-fld w-90' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Maximum Delivery Miles</h2>
                                    <input className='input-fld w-90' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Max Delivery Radius</h2>
                                    <input className='input-fld w-90' type='text' />    
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Hybrid Delivery</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
                                </div>
                            </div>
                            <div className=' d-flex ac-je mt-4 '>
                                <button onClick={() => setPopup(false)}  className='add-btn'>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <Table columns={columns} data={goCardless} />

            </div>

        </div>
    )
}

export default Delivery