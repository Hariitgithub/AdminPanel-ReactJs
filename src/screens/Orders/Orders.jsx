import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import TopBar from '../../components/TopBar/TopBar';
import { Table } from '../../components/Table/Table';
import { delete_icon, edit_icon, toggleOff, toggleOn, view_icon } from '../../assets/img';
import { goCardless } from '../redux/api/dummyJson';

const Orders = () => {
    const [popup, setPopup] = useState();
    const [type, setType] = useState();

    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }


    const columns = React.useMemo(
        () => [
            {
                Header: "Display Online Orders Receipt",
                accessor: "name",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Receipt Print Order",
                accessor: "number",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Items in Basket Quantity Grouping",
                accessor: "text",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },

            {
                Header: "Auto Print Orders from View Page",
                accessor: "town",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Order Completion Time",
                accessor: "forwardEmail",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Hide All Order",
                accessor: "door",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Reorder",
                accessor: "street",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Fake Order Prevention",
                accessor: "city",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Send Orders Via Fax",
                accessor: "fb",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Guest Checkout",
                accessor: "gbm",
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
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Orders</h4>
                    <div className='d-flex ac-jc '>
                        <button className='add-bar-btn white ms-3'  onClick={() => {setPopup(!popup); (setType("add"))}}>
                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Orders</p>
                        </button>
                    </div>
                </div>
                {popup && (
                    <div className='pop-up'>
                        <div className='popup-des w-70 h-70 black'>
                            <div className='d-flex ac-jb'>
                                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 '>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Orders</h4>
                                <button onClick={() => setPopup(false)} className='cancl-btn'>X
                                </button>
                            </div>

                            <div className='d-flex ae-jb mt-4'>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Display Online Orders Receipt</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Receipt Print Order</h2>
                                    <div className='d-flex  w-50 '>
                                        <button className='enable-chk' >Category
                                        </button>
                                        <button className='enable-chk' >Basket
                                        </button>
                                    </div>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Items in Basket Quantity Grouping</h2>
                                    <div className='d-flex  w-50 '>
                                        <button className='enable-chk' >Yes
                                        </button>
                                        <button className='enable-chk' >No
                                        </button>
                                    </div>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Auto Print Orders from View Page</h2>
                                    <div className='d-flex  w-50 '>
                                        <button className='enable-chk' >Yes
                                        </button>
                                        <button className='enable-chk' >No
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex ae-jb mt-4 '>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Order Completion Time</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Hide All Order</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Reorder</h2>
                                    <div className='d-flex  w-50 '>
                                        <button className='enable-chk' >Show
                                        </button>
                                        <button className='enable-chk' >Complete
                                        </button>
                                    </div>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Fake Order Prevention</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
                                </div>
                            </div>
                            <div className='d-flex ae-js mt-4'>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Send Orders Via Fax</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Guest Checkout</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
                                </div>
                            </div>
                            <div className=' d-flex ac-je my-3 '>
                                <button onClick={() => setPopup(false)} className='add-btn'>
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

export default Orders