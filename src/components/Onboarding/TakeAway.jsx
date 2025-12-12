import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggleOff, toggleOn } from '../../assets/img';

const TakeAway = ({ setTab }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const type = location?.state?.type;
    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }
    return (

        <div className='w-90 m-auto '>
            <div className='d-flex mt-2'>
                {/* <div className='pointer' onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </div> */}
                <h2 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 ms-2'>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""} Takeaway  Features</h2>
            </div>
            <div className='d-flex flex-wrap ac-jb mb-2 mt-4'>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Pre Order</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Pre Order Slots</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Pre Order Date</h2>
                    <input className='input-fld w-100' type='text' />
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>ASAP Label on Pre Order</h2>
                    <div className='d-flex  w-50 ac-js'>
                        <button className='enable-chk' >Yes
                        </button>
                        <button className='enable-chk' >No
                        </button>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap ac-jb mb-2 mt-5'>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Time interval for pre Orders</h2>
                    <input className='input-fld w-100' type='name' />
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Reservation Page on Website</h2>
                    <div className='d-flex  w-50 ac-js'>
                        <button className='enable-chk' >Yes
                        </button>
                        <button className='enable-chk' >No
                        </button>
                    </div>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Number of People Allowed Per Booking Slot</h2>
                    <input className='input-fld w-100' type='text' />
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>People Per Table</h2>
                    <input className='input-fld w-100' type='text' />
                </div>
            </div>
            <div className='d-flex flex-wrap ac-jb mb-2 mt-5'>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Table Booking Intervals</h2>
                    <input className='input-fld w-100' type='text' />
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Table Booking Slot 1</h2>
                    <input className='input-fld w-50' type='text' />
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Table Booking Slot 2</h2>
                    <div className='d-flex  w-50 ac-js'>
                        <button className='enable-chk' >Yes
                        </button>
                        <button className='enable-chk' >No
                        </button>
                    </div>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Table Booking Slot 1</h2>
                    <input className='input-fld w-50' type='text' />
                </div>
            </div>
            <div className='d-flex flex-wrap ac-jb mb-2 mt-5'>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Table Booking Slot 2</h2>
                    <input className='input-fld w-50' type='text' />
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Item Comments Online</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Staff Selection on Epos</h2>
                    <div className='d-flex  w-50 ac-js'>
                        <button className='enable-chk' >Yes
                        </button>
                        <button className='enable-chk' >No
                        </button>
                    </div>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Pre-Set Staff on Epos</h2>
                    <input className='input-fld w-100' type='text' />
                </div>
            </div>
            <div className='d-flex flex-wrap ac-jb mb-2 mt-5'>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Create Epos Staff</h2>
                    <input className='input-fld w-100' type='text' />
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Quick Search Item</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Item Comments</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Delivery</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>

            </div>
            <div className='d-flex flex-wrap ac-jb mb-2 mt-5'>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Collection/Pickup</h2>
                    <div className='d-flex  w-50 ac-js'>
                        <button className='enable-chk' >Yes
                        </button>
                        <button className='enable-chk' >No
                        </button>
                    </div>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Modify Item Price on Offline Orders</h2>
                    <div className='d-flex  w-50 ac-js'>
                        <button className='enable-chk' >Yes
                        </button>
                        <button className='enable-chk' >No
                        </button>
                    </div>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Menu Status</h2>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
                <div className='col-md-3 px-3'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Food Type</h2>
                    <div className='d-flex ac-js'>
                        <button onClick={handleChange}
                            className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                            {isToggled ?
                                <img className='w-50' src={toggleOn} /> :
                                <img className='w-50' src={toggleOff} />}
                        </button>
                        <p className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 gray1'>(Halal/Haram)</p>
                    </div>
                </div>
                <div className='col-md-3 px-3 mt-5'>
                    <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Dine-IN</h2>
                    <div className='d-flex ac-js'>
                        <button onClick={handleChange}
                            className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                            {isToggled ?
                                <img className='w-50' src={toggleOn} /> :
                                <img className='w-50' src={toggleOff} />}
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-5 d-flex ac-jb w-90 pe-2'>

                <button onClick={() => setTab(4)} className='back-btn mt-2'>
                    Back
                </button>
                <button onClick={() => setTab(6)} className='add-btn mt-2'>
                    Next
                </button>
            </div>

        </div>
    )
}

export default TakeAway