import React, { useState } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { config_table } from '../redux/api/dummyJson';

const CategoryConfig = () => {
    const [tabs, setTabs] = useState(0);

    return (
        <div className='w-90 m-auto mt-5 pb-5 pt-2'>
            <div className='d-flex gap-3 px-4 flex-wrap'>
                <button onClick={() => setTabs(0)} className={`${tabs == 0 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    New
                </button>
                <button onClick={() => setTabs(1)} className={`${tabs == 1 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    InProgress
                </button>
                <button onClick={() => setTabs(2)} className={`${tabs == 2 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    Pending
                </button>
                <button onClick={() => setTabs(3)} className={`${tabs == 3 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    Completed
                </button>
                <button onClick={() => setTabs(4)} className={`${tabs == 4 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    Low
                </button>
                <button onClick={() => setTabs(5)} className={`${tabs == 5 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    Normal
                </button>
                <button onClick={() => setTabs(6)} className={`${tabs == 6 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    High
                </button>
                <button onClick={() => setTabs(7)} className={`${tabs == 7 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    Urgent
                </button>
                <button onClick={() => setTabs(8)} className={`${tabs == 8 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    Manager Notes
                </button>
                <button onClick={() => setTabs(9)} className={`${tabs == 9 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    Regional Manager Notes
                </button>
                <button onClick={() => setTabs(10)} className={`${tabs == 10 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    From Date
                </button>
                <button onClick={() => setTabs(11)} className={`${tabs == 11 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    From Date
                </button>
                <select onClick={() => setTabs(12)} className={`${tabs == 12 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    <option >Select Department</option>
                    <option >Inprogress</option>
                    <option >Completed</option>
                </select>
                <button onClick={() => setTabs(13)} className={`${tabs == 13 ? "bg-black white " : ""}menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3`}>
                    Enter Ticket ID
                </button>
                <button className="cat-edit-btn f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-3 white">
                    Clear All
                </button>
            </div>
            <div className='catbox-bg pb-3'>
                <div className='d-flex ac-jb pos-bar mt-4 '>
                    <div className='d-flex col-md-2 ps-3'>
                        <input type='checkbox' />
                        <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 white">Pos</p>
                    </div>
                    <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 white col-md-3">Tickets/Tasks (Showing Tasks )</p>
                    <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 white col-md-3">Category/Host</p>
                    <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-3 white col-md-3">Options</p>
                </div>
                {config_table.map((item) => {
                    return (
                        <div className='d-flex ac-jb mt-3 mx-4 black'>
                            <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 px-4 col-md-2">{item.s_no}</p>
                            <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  col-md-3 ">{item.tickets}</p>
                            <div className='col-md-3'>
                                <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  ">Technical: {item.tech}</p>
                                <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 mt-2">Test Account {item.test}</p>
                                <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  mt-3 "><SmsOutlinedIcon className='config-icons' /> <WhatsAppIcon className='config-icons' /> <WifiCalling3Icon className='config-icons' /> <MailOutlineIcon className='config-icons' /></p>
                                <button className='cat-cancel f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  mt-3'>Add Section</button>
                            </div>
                            <div className='col-md-3'>
                                <div className='d-flex gap-3 mt-3'>
                                    <button className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 publi-btn">Options</button>
                                    <button className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 publi-btn">Last Note</button>
                                </div>
                                <div>
                                    <form>
                                        <span className='cat-form'>
                                            <label className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 mt-2 col-md-4">Assigned By </label>
                                            <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 mt-2">:   {item.assignedby}</p>
                                        </span>
                                        <span className='cat-form'>
                                            <label className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 mt-2 col-md-4">Assigned To </label>
                                            <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 mt-2">:  {item.assignedto}</p>
                                        </span>
                                        <span className='cat-form'>
                                            <label className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 mt-2 col-md-4">Progress </label>
                                            <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 mt-2">:  {item.progress} </p>
                                        </span>
                                        <span className='cat-form'>
                                            <label className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 mt-2 col-md-4">Created At </label>
                                            <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 mt-2">:   {item.created}</p>
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryConfig