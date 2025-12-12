import React from 'react'
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";
// import { moon, sun } from '../../assets/img';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { cart, moon_icon, profile } from '../../assets/img';

const TopBar = () => {

    // var btn = document.querySelector("input");
    // btn.onclick = () => {
    //     localStorage.getItem(0) 
    // }
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
        // if(localStorage?.getItem('toggle') == 2 ){
        //     localStorage?.setItem('toggle', 1)
        // }else if(localStorage?.getItem('toggle') == 1){
        //     localStorage?.setItem('toggle', 2)
        // }   
    };


    return (
        <div className='d-flex ac-je  gap-3 pt-2 topbar-fix pe-5'>
            <div className='dark_mode mx-2 mb-2'>
                <input
                    className='dark_mode_input'
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={toggleTheme}
                    // checked={+localStorage?.getItem('toggle') == 2 ? true : false}
                />
                <label className='dark_mode_label d-flex ac-js' for='darkmode-toggle'>
                    <p className='f1 fs-sm-8 fs-md-8 fs-lg-8 fs-xl-6 fs-xxl-8 mb-0 ps-1'>DarkMode</p>
                    <img src={moon_icon} className='dark_icon' alt="" />
                    {/* <Sun />
                    <Moon /> */}
                    {/* <img src={sun} alt="" />
                    <img src={moon} alt="" /> */}
                    {/* <WbSunnyIcon />
                    <NightsStayIcon /> */}
                </label>
            </div>
            <div className='top-cart mx-2 pointer  '>
                <img src={cart} alt=" " />
                <div className='top-cart-no'>
                    <p className='f1 fs-sm-8 fs-md-8 fs-lg-8 fs-xl-10 fs-xxl-12'>4</p>
                </div>
            </div>
            <div>
                <img src={profile} alt="" className='topbar-img mx-2 pointer mb-2' />
            </div>
        </div>
    )
}

export default TopBar