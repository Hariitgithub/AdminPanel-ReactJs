import React, { useState } from 'react'
import TopBar from '../../components/TopBar/TopBar'
import { delete_icon, edit_icon, toggleOff, toggleOn, view_icon } from '../../assets/img'
import { goCardless } from '../redux/api/dummyJson'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table } from '../../components/Table/Table';

const Seo = () => {
    const [popup, setPopup] = useState();
    const [type, setType] = useState();
    
    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }

    const columns = React.useMemo(
        () => [
            {
                Header: "Takeaway/ Restaurant Information Page",
                accessor: "name",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Takeaway/ Restaurant Description Home Page",
                accessor: "number",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Add Order Page Title",
                accessor: "text",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },

            {
                Header: "Add Order Description",
                accessor: "town",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Google Conversion",
                accessor: "forwardEmail",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Google Pin Status",
                accessor: "door",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "SEO Email",
                accessor: "street",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "GPIN Deal",
                accessor: "city",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Google Webmaster Email",
                accessor: "post",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Bing Webmaster Tools",
                accessor: "Created",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Google Analytics Key",
                accessor: "status",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Tag manager",
                accessor: "tag",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Facebook Pixel ID",
                accessor: "fb",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "GBM Status",
                accessor: "gbm",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "GBM Sync",
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
            <div>
                <div className='d-flex ac-jb top-search-bar'>
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>SEO</h4>
                    <div className='d-flex ac-jc '>
                        <button className='add-bar-btn white ms-3' onClick={() => {setPopup(!popup); (setType("add"))}}>
                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add SEO</p>
                        </button>
                    </div>
                </div>
                {popup && (
                    <div className='pop-up'>
                        <div className='popup-des w-80 h-70 black'>
                            <div className='d-flex ac-jb'>
                                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 '>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} SEO</h4>
                                <button onClick={() => setPopup(false)} className='cancl-btn'>X
                                </button>
                            </div>
                            <div className='d-flex ae-jb mt-5 '>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Takeaway / Restaurant Information Page</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Takeaway / Restaurant Description Home Page</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Add Order Page Title</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Add Order Page Description</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                            </div>
                            <div className='d-flex ae-jb mt-5 '>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Google Conversion</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Google Pin Status</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Seo Email</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>GPIN Deal</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                            </div>
                            <div className='d-flex ae-jb mt-5 '>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Google Webmaster Email</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Google Webmaster Tools</h2>
                                    <input className='input-fld w-100' type='text' />

                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Bing Webmaster Tools</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Google Analytics Email</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                            </div>
                            <div className='d-flex ae-jb mt-5 '>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Google Analytics Key</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Tag Manager</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>Facebook Pixel ID</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                                <div className='col-md-3 p-2'>
                                    <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>GBM Status</h2>
                                    <input className='input-fld w-100' type='text' />
                                </div>
                            </div>
                            <div className='col-md-4 mt-5 '>
                                <h2 className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18'>GBM Sync</h2>
                                <button className='sync-btn'>
                                    Sync
                                </button>
                            </div>

                            <div className='d-flex ac-je mt-4 '>
                                <button  onClick={() => setPopup(false)} className='add-btn'>
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

export default Seo