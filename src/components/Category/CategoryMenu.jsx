import React, { useState } from 'react'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CachedIcon from '@mui/icons-material/Cached';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { category_box } from '../../screens/redux/api/dummyJson';
import { toggleOff, toggleOn } from '../../assets/img';

const CategoryMenu = () => {
    const [img1, setImg1] = useState(null);
    const [fileName1, setFileName1] = useState("No Selected File")
    const [show, setShow] = useState();
    const [days, setDays] = useState(0);
    const [isToggled, setIsToggled] = useState(false);
    const handleChange = () => {
        setIsToggled(!isToggled);
    }


    return (
        <div className='w-100'>
            <div className='d-flex ac-jb select-bar mt-4'>
                <div className='d-flex ac-jc'>
                    <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white ">Select Category</p>
                    <select name="" id="" className='ms-3 bg-black white  p-1 '>
                        <option>Show all Categories</option>
                        <option>Show all Categories</option>
                        <option>Show all Categories</option>
                    </select>
                </div>
                <div className='d-flex ac-jc '>
                    <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white">Auto Fill</p>
                    <button onClick={handleChange}
                        className={`border-0 toggle-btn pb-1 ms-2 text-left ${isToggled ? "on" : "off"}`}>
                        {isToggled ?
                            <div><img className='w-50' src={toggleOn} /></div> :
                            <div><img className='w-50' src={toggleOff} /></div>}
                    </button>
                </div>
            </div>
            <div className='catbox-bg mt-4'>
                {category_box.map((item) => {
                    return (
                        <div>
                            <div className='d-flex ac-jb pos-bar mt-4'>
                                <div className='d-flex'>
                                    <input type='checkbox' />
                                    <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 white">Pos</p>
                                </div>
                                <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 white">Name 1st language</p>
                                <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 white">Name 2nd language</p>
                                <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 white">Description 1st language</p>
                                <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ps-1 white">Description 2nd language</p>
                            </div>
                            <div className='d-flex ac-jb'>
                                <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16  p-1 white bg-black">{item.special}</p>
                                <div className='d-flex  gap-2 ac-jc '>
                                    <ArrowDropDownRoundedIcon className='cat-up pointer' onClick={() => setShow(!show)} />
                                    <ArrowDropUpRoundedIcon className='cat-up pointer' onClick={() => setShow(false)} />
                                    <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 my-1 white  cat-add">Add More</p>
                                </div>
                            </div>
                            <div className='d-flex ac-jb bg-primar p-2'>
                                <div className='d-flex ac-jc'>
                                    <input type='checkbox' />
                                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white '>1</p>
                                    <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white ps-1'>Easter Special</p>
                                </div>
                                <div className='d-flex gap-1'>
                                    <MenuIcon className='menu-icon black' />
                                    <CachedIcon className='menu-icon black' />
                                </div>
                            </div>
                            {show && (
                                <div className='d-flex mt-4 ms-3'>
                                    <div className='col-md-2 black'>
                                        <div className='d-flex '>
                                            <p className='f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 w-30'>Move To</p>
                                            <select className='w-70 ms-2 img-upload-border'>
                                                <option>Easter Special</option>
                                            </select>
                                        </div>
                                        <div className='d-flex  mt-2'>
                                            <p className='f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 w-30'>Link To</p>
                                            <select className='w-70 ms-2 img-upload-border'>
                                                <option>UnLink</option>
                                            </select>
                                        </div>
                                        <div className='d-flex mt-2 '>
                                            <p className='f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 w-30'>Offers</p>
                                            <select className='w-70 ms-2 img-upload-border'>
                                                <option>None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='mx-2 cat-special-box'>
                                        <div className='d-flex gap-3 col-md-12'>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-add px-2'>Online Discount</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-add px-2'>Collection Discount</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-add px-2'>Delivery</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-add px-2'>Collection</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-add px-2'>Include fee</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-add px-2'>Allow Coupon</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-add px-2'>Show Online</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-cancel px-2 d-flex ac-jc'> <DoDisturbIcon />Cancel</button>
                                        </div>
                                        <div className='mt-3 d-flex gap-2'>
                                            <form className='img-upload-border' onClick={() => document.querySelector(".input-field").click()}>
                                                <input type='file' accept='image/*' hidden className='input-field'
                                                    onChange={({ target: { files } }) => {
                                                        files[0] && setFileName1(files[0].name)
                                                        if (files) {
                                                            setImg1(URL.createObjectURL(files[0]))
                                                        }
                                                    }} />
                                                {img1 ?
                                                    <img src={img1} width={60} height={30} alt={fileName1} /> :
                                                    <p className='f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 black'>Upload Image</p>
                                                }
                                            </form>
                                            <button className='input-box f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 px-2 black'>Add Section</button>
                                            <button className='menu-del-box f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  px-2 sec1'>Delete Sub Category</button>
                                        </div>
                                        <div className='mt-3 black'>
                                            <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 mb-0 green2 '>Advanced Options</p>
                                            <div className='d-flex mt-3 align-items-center'>
                                                <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  mb-0 col-md-1'>Schedule</p>
                                                <select className='input-box p-1 black f2'>
                                                    <option >No Schedule</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='mt-4 d-flex align-items-center black'>
                                            <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  mb-0 col-md-1'>Days</p>
                                            <div className=' d-flex gap-2'>
                                                <button onClick={() => {
                                                    setDays(0);
                                                }} className={`${days == 0 ? "days-cir-sel" : " "} days-cir f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  mb-0 `}>M</button>
                                                <button onClick={() => {
                                                    setDays(1);
                                                }} className={`${days == 1 ? "days-cir-sel" : " "} days-cir f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  mb-0 `}>T</button>
                                                <button onClick={() => {
                                                    setDays(2);
                                                }} className={`${days == 2 ? "days-cir-sel" : " "} days-cir f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  mb-0 `}>W</button>
                                                <button onClick={() => {
                                                    setDays(3);
                                                }} className={`${days == 3 ? "days-cir-sel" : " "} days-cir f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  mb-0 `}>T</button>
                                                <button onClick={() => {
                                                    setDays(4);
                                                }} className={`${days == 4 ? "days-cir-sel" : " "} days-cir f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  mb-0 `}>F</button>
                                                <button onClick={() => {
                                                    setDays(5);
                                                }} className={`${days == 5 ? "days-cir-sel" : " "} days-cir f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  mb-0 `}>S</button>
                                                <button onClick={() => {
                                                    setDays(6);
                                                }} className={`${days == 6 ? "days-cir-sel" : " "} days-cir f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18  mb-0 `}>S</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryMenu