import React, { useState } from 'react'
import { delete_icon, edit_icon, toggleOff, toggleOn, view_icon } from '../../assets/img';
import { Table } from '../../components/Table/Table';
import { goCardless } from '../redux/api/dummyJson';
const OrderRecipt = () => {
    const [popup, setPopup] = useState();
    const [type, setType] = useState();
    
    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }

    const columns = React.useMemo(
        () => [
            {
                Header: "S.No",
                accessor: "s.no",
                Cell: ({ value, row }) => {
                    return <p>{row.index + 1}</p>;
                },
            },
            {
                Header: "Restaurant",
                accessor: "name",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Printer",
                accessor: "text",
                Cell: ({ value, row }) => {
                    return <React.Fragment>
                        <div>
                            <button onClick={handleChange}
                                className={`border-0 toggle-btn ${isToggled ? "on" : "off"}`}>
                                {isToggled ?
                                    <div><img className='w-50' src={toggleOn} /></div> :
                                    <div><img className='w-50' src={toggleOff} /></div>}
                            </button>
                        </div>
                    </React.Fragment>
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
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Order Recipt</h4>
                    <div className='d-flex ac-jc '>
                        <button className='add-bar-btn white ms-3' onClick={() => {setPopup(!popup); (setType("add"))}}>
                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Order Recipt</p>
                        </button>
                    </div>
                </div>       
                {popup && (
                    <div className='pop-up'>
                        <div className='popup-des w-60 black'>
                            <div className='d-flex ac-jb'>
                                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 '>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Order Recipt</h4>
                                <button onClick={() => setPopup(false)} className='cancl-btn'>X
                                </button>
                            </div>
                            <div className='d-flex gap-3 mt-5'>
                            <div className='col-md-4'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Restaurant</h2>
                                    <input className='input-fld w-90' type='text' />
                                </div>
                                <div className='col-md-4'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Printer</h2>
                                    <button onClick={handleChange}
                                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                                        {isToggled ?
                                            <div><img className='w-50' src={toggleOn} /></div> :
                                            <div><img className='w-50' src={toggleOff} /></div>}
                                    </button>
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
        </div>
    )
}

export default OrderRecipt