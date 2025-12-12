import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggleOff, toggleOn } from '../../assets/img';


const DiscountOffers = ({ setTab }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const type = location?.state?.type;

    const [isToggled, setIsToggled] = useState(false);
    
    const handleChange = () => {
        setIsToggled(!isToggled);
    }
    return (
        <div>
            <div className='w-90 m-auto'>
                <div className='d-flex mt-2'>
                    {/* <div className='pointer' onClick={() => navigate(-1)}>
                        <ArrowBackIcon />
                    </div> */}
                    <h2 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 ms-2'>{type == "view" ? "View" : type == "edit" ? "Edit" : type == "add" ? "Add"  : ""}  Discount Offers</h2>
                </div>
                <div className='d-flex flex-wrap ac-jb mb-2 mt-4'>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Discount type</h2>
                        <input className='input-fld w-100' placeholder='Basic/advanced' type='name' />
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Discount %</h2>
                        <input className='input-fld w-100' placeholder='Collection orders' type='number' />
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Collection Discount </h2>
                        <input className='input-fld w-100' placeholder='Minimum orders' type='text' />
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Online discount</h2>
                        <input className='input-fld w-100' placeholder='Minimum orders' type='email' />
                    </div>
                </div>
                <div className='d-flex flex-wrap ac-jb mt-5 mb-2'>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Gift</h2>
                        <input className='input-fld w-100' placeholder='minimum order for online' type='name' />
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Gift</h2>
                        <input className='input-fld w-100' placeholder='minimum order for QR code' type='number' />
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Gift</h2>
                        <input className='input-fld w-100' type='text' />
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Gift online orders</h2>
                        <button onClick={handleChange}
                            className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                            {isToggled ?
                                <div><img className='w-50' src={toggleOn} /></div> :
                                <div><img className='w-50' src={toggleOff} /></div>}
                        </button>
                    </div>
                </div>
                <div className='d-flex flex-wrap ac-jb mt-5 mb-2'>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Gift instore orders</h2>
                        <button onClick={handleChange}
                            className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                            {isToggled ?
                                <div><img className='w-50' src={toggleOn} /></div> :
                                <div><img className='w-50' src={toggleOff} /></div>}
                        </button>
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Gift QR code orders</h2>
                        <button onClick={handleChange}
                            className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                            {isToggled ?
                                <div><img className='w-50' src={toggleOn} /></div> :
                                <div><img className='w-50' src={toggleOff} /></div>}
                        </button>
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Free item add on charge</h2>
                        <div className='d-flex ac-js w-50'>
                            <button className='enable-chk' >Yes
                            </button>
                            <button className='enable-chk' >No
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Create meal deals</h2>
                        <button onClick={handleChange}
                            className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                            {isToggled ?
                                <div><img className='w-50' src={toggleOn} /></div> :
                                <div><img className='w-50' src={toggleOff} /></div>}
                        </button>
                    </div>
                </div>
                <div className='d-flex flex-wrap ac-jb mt-5 mb-2'>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>BOGOF select menue</h2>
                        <input className='input-fld w-100' placeholder='menue items or all menue’s' type='text' />
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>BOGOF mark add-ons free</h2>
                        <button onClick={handleChange}
                            className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                            {isToggled ?
                                <div><img className='w-50' src={toggleOn} /></div> :
                                <div><img className='w-50' src={toggleOff} /></div>}
                        </button>
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Enable coupon</h2>
                        <div className='d-flex ac-js w-50'>
                            <button className='enable-chk' >Yes
                            </button>
                            <button className='enable-chk' >No
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Coupon minimum order</h2>
                        <input className='input-fld w-100' placeholder='items only/ full basket' type='text' />
                    </div>
                </div>
                <div className='d-flex flex-wrap  mt-5 mb-2'>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Modify online discounts</h2>
                        <div className='d-flex ac-js w-50'>
                            <button className='enable-chk' >Yes
                            </button>
                            <button className='enable-chk' >No
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 px-2'>
                        <h2 className='f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16'>Half and half pizza orders</h2>
                        <button onClick={handleChange}
                            className={`border-0 toggle-btn text-left ${isToggled ? "on" : "off"}`}>
                            {isToggled ?
                                <div><img className='w-50' src={toggleOn} /></div> :
                                <div><img className='w-50' src={toggleOff} /></div>}
                        </button>
                    </div>

                </div>

                <div className='mt-5 d-flex ac-jb w-90 pe-2'>

                    <button onClick={() => setTab(2)} className='back-btn mt-2'>
                        Back
                    </button>
                    <button onClick={() => setTab(4)} className='add-btn mt-2'>
                        Next
                    </button>
                </div>

            </div>
        </div>
    )
}

export default DiscountOffers