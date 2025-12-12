import React, { useState } from 'react'
import { offr_details, special_offers } from '../../screens/redux/api/dummyJson'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { delete_icon, delete_icon1 } from '../../assets/img';


const CategoryOptions = () => {

    const [options, setOptions] = useState();
    const optionHandle = () => {
        setOptions(!options);
    }

    return (
        <div>
            <div className='d-flex ac-jb bg-black p-2 px-3 mt-4'>
                <button className="line-box f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  white">
                    Full Screen
                </button>
                <div className='d-flex gap-2 ac-jc '>
                    <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white">Keys</p>
                    <button className="publi-btn f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white">
                        Categories
                    </button>
                    <button className="publi-btn bg-blue f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white">
                        Sub-categories
                    </button>
                    <button className="publi-btn bg-yellow f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white">
                        Items
                    </button>
                </div>
            </div>

            <div className='mt-3 d-flex w-100'>
                <div className='catbox-none border-top col-md-2'>
                    <button className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 border-top bg-black text-center white w-100 border-0 p-2">Show All</button>
                    {special_offers.map((item) => {
                        return (
                            <button className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 bg-active w-100 border-0 bg-white p-2 text-start">{item.offers}</button>
                        )
                    })}
                </div>
                <div className='col-md-10'>
                    {offr_details.map((item) => {
                        return (
                            <div>
                                <div className='d-flex align-items-start'>
                                    <div className='col-md-8 pb-3 mx-3'>
                                        <div className='catbox-bg pb-3  rounded'>
                                            <div className='d-flex ac-jb bg-black px-3 border-top'>
                                                <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  white   p-2">{item.spcl}</p>
                                                <input type='text' placeholder='Description' className='w-50 ps-2' />
                                            </div>
                                            <div className='bg-black d-flex ac-jb px-3 mt-3 p-2'>
                                                <button className="cat-num col-md-4">{item.spcl}</button>
                                                <button className="cat-num">{item.amt}</button>
                                                <input type='text' placeholder={item.place} className='w-50 ps-2' />
                                            </div>
                                            <div className='bg-black d-flex ac-jb px-3 mt-3 p-2 '>
                                                <button className="cat-num col-md-4">{item.dish}</button>
                                                <button className="cat-num">{item.amt}</button>
                                                <input type='text' placeholder={item.place} className='w-50 ps-2' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-3 catbox-bg'>
                                        <div className='d-flex ac-jb p-2 mt-2'>
                                            <button onClick={optionHandle} className="publi-btn bg-blue f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white w-40">
                                                Options
                                            </button>
                                            <button className="publi-btn f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white w-50">
                                                Add Items
                                            </button>
                                        </div>
                                        <div className='d-flex ac-jb p-2'>
                                            <button onClick={optionHandle} className="publi-btn bg-blue f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white w-40">
                                                Options
                                            </button>
                                            <button className="publi-btn f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white w-50">
                                                View Addons
                                            </button>
                                        </div>
                                        <div className='d-flex ac-jb p-2'>
                                            <button onClick={optionHandle} className="publi-btn bg-blue f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white w-40">
                                                Options
                                            </button>
                                            <button className="publi-btn f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white w-50">
                                                View Addons
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {options && (
                                    <div>
                                        <div className=' d-flex flex-wrap gap-2 my-3 ps-4'>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-cancel px-2 d-flex ac-jc'><img src={delete_icon1} className='view-btn w-20 me-1' alt="" />Delete</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-add px-2 d-flex ac-jc'> <ArrowCircleUpIcon />Edit</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-add px-2 d-flex ac-jc'> <ArrowCircleUpIcon />Add on Category</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-add px-2 d-flex ac-jc'> <ArrowCircleUpIcon />Copy</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-add px-2 d-flex ac-jc'> <ArrowCircleUpIcon />Add on Items</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-add px-2 d-flex ac-jc'> <ArrowCircleUpIcon />2nd Language</button>
                                            <button className='f2 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 menu-box px-2 d-flex ac-jc'> 10” Margheritta Pizza</button>
                                            <select className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 menu-box f2'>
                                                <option>Please Select</option>
                                            </select>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-add px-2 d-flex ac-jc mt-2'> <ArrowCircleUpIcon />Half & Half</button>
                                        </div>
                                        <div className='catbox-bg d-flex flex-wrap align-items-center gap-2 ms-2 py-3 ps-3'>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-cancel  d-flex ac-jc  p-2'> <img src={delete_icon1} className='view-btn w-20 me-1' alt="" />Delete</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-add px-2 d-flex ac-jc'> <ArrowCircleUpIcon />Edit</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-add bg-primar px-2 d-flex ac-jc'> <ArrowCircleUpIcon />Hide On Menu</button>
                                            <button className='f1 fs-sm-10 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-14 mb-0 cat-add bg-primar px-2 d-flex ac-jc'> <ArrowCircleUpIcon />Hide on Receipt</button>
                                            <div>
                                                <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0  black  p-2">POS</p>
                                                <p className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 black  text-center p-2">1</p>
                                            </div>
                                            <div className='ms-2'>
                                                <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 text-center black">Type</p>
                                                <button className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 bg-blue  publi-btn px-2">Single</button>
                                            </div>
                                            <div className='ms-2'>
                                                <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 text-center black">Default Price</p>
                                                <input type='checkbox' className='' /><input type='number' className='default-box ms-2' placeholder='00.00' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16  text-center black">Name</p>
                                                <input type='text' className=' f1  name-box black' placeholder='10” Margheritta Pizza' />
                                            </div>
                                            <div>
                                                <p className="f3 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16  text-center black ">2nd Language</p>
                                                <input type='text' className=' f1 name-box black' placeholder='2nd Language' />
                                            </div>
                                            <button className="f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 bg-blue  publi-btn p-2"><ArrowCircleUpIcon />Show on Print</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default CategoryOptions