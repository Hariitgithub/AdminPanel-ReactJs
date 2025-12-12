import React from 'react'
import { cart, cart1, logo, moon_icon, profile } from '../../assets/img'

const TopBarConst = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div className='const-top bg-primar px-2'>
            <div className="mx-4 d-flex ac-jb">
                <div className='d-flex ac-jc'>
                    <img src={logo} alt='' className='const-logo' />
                    <h4 className='f9 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0  '>OrderZest</h4>
                </div>
                <div className='d-flex ac-je'>
                    <div className='dark_mode mx-2'>
                        <input
                            className='dark_mode_input'
                            type='checkbox'
                            id='darkmode-toggle'
                            onChange={toggleTheme}
                        />
                        <label className='dark_mode_label d-flex ac-js' for='darkmode-toggle'>
                            <h6 className='f1 fs-sm-8 fs-md-8 fs-lg-8 fs-xl-6 fs-xxl-8 mb-0 d-flex ac-js  ps-1'>DarkMode</h6>
                            <img src={moon_icon} className='dark_icon' alt="" />
                            {/* <Sun />
                    <Moon /> */}
                            {/* <img src={sun} alt="" />
                    <img src={moon} alt="" /> */}
                            {/* <WbSunnyIcon />
                    <NightsStayIcon /> */}
                        </label>
                    </div>
                    <div className='top-cart mx-4 pointer '>
                        <img src={cart1} alt=" " />
                        <div className='top-cart-no'>
                            <p className='f1 fs-sm-8 fs-md-8 fs-lg-8 fs-xl-10 fs-xxl-12 mb-0'>4</p>
                        </div>
                    </div>
                    <div className='d-flex ac-jc'>
                        <img src={profile} alt="" className='topbar-img mx-2 pointer' />
                        <h4 className='f3 fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 mb-0 '>Chrish</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBarConst