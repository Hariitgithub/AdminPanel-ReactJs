import React, { useState } from 'react'
import CategoryMenu from '../../components/Category/CategoryMenu'
import CategoryItems from '../../components/Category/CategoryItems'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CachedIcon from '@mui/icons-material/Cached';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { category_box, config, config_table, offr_details, special_offers } from '../../screens/redux/api/dummyJson';
import { toggleOff, toggleOn } from '../../assets/img';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import CategoryConfig from './CategoryConfig';
import CategoryOptions from '../../components/Category/CategoryOptions';
import SubCategories from '../../components/Category/SubCategories';
import TopBarConst from '../../components/TopBarConst/TopBarConst';

const Category = () => {
    const [show, setShow] = useState();
    const [days, setDays] = useState(0);
    const [menus, setMenus] = useState(0);
    const [isToggled, setIsToggled] = useState(false);
    const [showpopup, setShowpopup] = useState();

    const handlePopup = () => {
        setShowpopup(!showpopup);
    }
    const handleChange = () => {
        setIsToggled(!isToggled);
    }
    return (
        <div className='w-100 mt-5 pt-3'>
            {showpopup && (
                <div className='cat-update '>
                    <div className='cat-addon overflow-scroll black pb-3 h-80'>
                        <div className=' d-flex ac-jb bg-black px-3'>
                            <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  white p-2">Dessert Dips</p>
                            <CancelIcon className='red pointer' onClick={() => setShowpopup(false)} />
                        </div>
                        <div className='d-flex gap-3 mt-2 ps-2 black'>
                            <button className="input-box p-1 f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ">
                                Edit Item Addon
                            </button>
                            <button className="input-box p-1  f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ">
                                Meal Deal
                            </button>
                            <button className="input-box p-1  f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ">
                                Create your own
                            </button>
                            <button className="input-box p-1  f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 ">
                                Half & Half
                            </button>
                        </div>
                        <div className='d-flex'>
                            <div className='mt-2 ps-3 col-md-5'>
                                <div className=' d-flex '>
                                    <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  p-2">Auto Suggestions</p>
                                    <input type='checkbox' />
                                </div>
                                <div className='d-flex mb-2 mt-2'>
                                    <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 col-md-4 p-2">Name</p>
                                    <input type='text' />
                                </div>
                                <div className='d-flex mb-2'>
                                    <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 col-md-4 p-2">Type</p>
                                    <input type='text' />
                                </div>
                                <div className='d-flex mb-2'>
                                    <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 col-md-4 p-2">Add Category</p>
                                    <input type='text' />
                                </div>
                                <div className='d-flex mb-2'>
                                    <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 col-md-4 p-2">NextMove</p>
                                    <input type='text' />
                                </div>
                                <div className='d-flex mb-2'>
                                    <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 col-md-4 p-2">Price</p>
                                    <input type='text' />
                                </div>
                                <div className='d-flex mb-2'>
                                    <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 col-md-4 p-2">Addon Print</p>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='col-md-7 mt-5'>
                                <div className='d-flex mb-3'>
                                    <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 col-md-2 p-2">Diet : </p>
                                    <div className='d-flex ac-jc'>
                                        <input type='checkbox' />
                                        <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 p-2">Vegetarian</p>
                                    </div>
                                    <div className='d-flex ac-jc'>
                                        <input type='checkbox' />
                                        <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 p-2">Non-Vegetarian</p>
                                    </div>
                                    <div className='d-flex ac-jc'>
                                        <input type='checkbox' />
                                        <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 p-2">Gluten Free</p>
                                    </div>
                                </div>
                                <div className='d-flex mb-3'>
                                    <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 col-md-2 p-2">Alcohol : </p>
                                    <div className='d-flex ac-jc'>
                                        <input type='checkbox' />
                                        <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 p-2">Present</p>
                                    </div>
                                    <div className='d-flex ac-jc'>
                                        <input type='checkbox' />
                                        <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 p-2">Absent</p>
                                    </div>
                                </div>
                                <div className='d-flex mb-3'>
                                    <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 col-md-2 p-2">Tobacco : </p>
                                    <div className='d-flex ac-jc'>
                                        <input type='checkbox' />
                                        <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 p-2">Present</p>
                                    </div>
                                    <div className='d-flex ac-jc'>
                                        <input type='checkbox' />
                                        <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 p-2">Absent</p>
                                    </div>
                                </div>
                                <div className='m-2 d-flex gap-3'>
                                    <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-cancel px-2 d-flex ac-jc'> <DoDisturbIcon />Cancel</button>
                                    <button className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 cat-cancel bg-green1 px-2 d-flex ac-jc'> <ArrowCircleUpIcon />Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='w-90 m-auto mt-4'>
                <div className='d-flex ac-jb px-4'>
                    <button onClick={() => setMenus(0)} className={`${menus === 0 ? "bg-black white" : " "} menu-box f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0`}>
                        Menu
                    </button>
                    <button onClick={() => setMenus(1)} className={`${menus === 1 ? "bg-black white" : " "} menu-box f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0`}>
                        Categories
                    </button>
                    <button onClick={() => setMenus(2)} className={`${menus === 2 ? "bg-black white" : " "} menu-box f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0`}>
                        Sub Categories
                    </button>
                    <button onClick={() => setMenus(3)} className={`${menus === 3 ? "bg-black white" : " "} menu-box f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0`}>
                        Items
                    </button>
                    <button   onClick={handlePopup} className="cat-edit-btn  fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0">
                        Edit
                    </button>
                    <select className="menu-box fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 dark-drop">
                        <option >More Buttons</option>
                        <option >Inprogress</option>
                        <option >Completed</option>
                    </select>
                    <button className="publi-btn f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white">
                        Publish
                    </button>
                </div>

                {menus == 0 && (
                    <CategoryOptions />
                )}
                {menus == 1 && (
                    <CategoryMenu />
                )}
                {menus == 2 && (
                    <SubCategories />
                )}
                {menus == 3 && (
                    <CategoryItems />
                )}
            </div>
        </div>
    )
}

export default Category