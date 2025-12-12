import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import { useNavigate } from 'react-router-dom';
import { printer_data } from '../redux/api/dummyJson';
import { printer, search } from '../../assets/img';

const PrinterRecipt = () => {
    const navigate = useNavigate();
    return (
        <div className="dashRightView home_section trans">
            <div className='d-flex ac-jb top-search-bar'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Order Recipt</h4>
                <div className='d-flex ac-jc '>
                    <button className='add-bar-btn white ms-3'>
                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Order Recipt</p>
                    </button>
                    <div className="d-flex align-items-center  border-search-non">
                        <img src={search} alt="" className='search-icon' />
                        <input type="text" name="location" placeholder='Search here....' className=' cust-btn ps-2 mb-1 white' />
                    </div>
                </div>
            </div>
            <div className='d-flex ac-jb my-5'>
                <div className='col-md-6'>
                    <div className='w-100 d-flex ac-je pe-5'>
                        <div className='d-flex ac-jc w-50 recipt-bg mx-3'>
                            <img src={printer} alt="" className='recipt-img m-2' />
                            <h4 className='f2 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 gray1'>Parcel Recipt</h4>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap gap-5 ms-3 my-4'>
                        {printer_data.map((item) => {
                            return (
                                <div className=' recipt-box recipt-bg mt-1'>
                                    <p className='f3  fs-sm-10 fs-md-10 fs-lg-14 fs-xl-16 fs-xxl-18  gray1 text-center'>Bill No. {item.Bill}</p>
                                    <h4 className='f2 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22  white border-line pb-2 text-center'>Parcel Recipt</h4>
                                    <div className=''>
                                        <div className='d-flex ac-jb'>
                                            <p className='f3 fs-sm-10 fs-md-10 fs-lg-14 fs-xl-16 fs-xxl-18 gray1'> QT</p>
                                            <p className='f3 fs-sm-10 fs-md-10 fs-lg-14 fs-xl-16 fs-xxl-18 gray1'> Items</p>
                                            <p className='f3 fs-sm-10 fs-md-10 fs-lg-14 fs-xl-16 fs-xxl-18 gray1'> Price</p>
                                        </div>
                                        <div className='d-flex ac-jb'>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.qty}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.item1}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.price}</p>
                                        </div>
                                        <div className='d-flex ac-jb'>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.qty}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.item2}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.price}</p>
                                        </div>
                                        <div className='d-flex ac-jb border-line'>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.qty}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.item3}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.price}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex ac-jb'>
                                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 gray1'> Subtotal</p>
                                        <p className='f2 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 white'> {item.subtotal}</p>
                                    </div>
                                    <div className='text-center mb-2'>
                                        <button className='Paid-btn'>
                                            Paid
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='w-100 d-flex ac-js ps-2 '>
                        <div className='d-flex ac-jc w-50 recipt-bg mx-3'>
                            <img src={printer} alt="" className='recipt-img m-2' />
                            <h4 className='f2 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 gray1'>Bill Recipt</h4>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap gap-5 ms-3 my-4'>
                        {printer_data.map((item) => {
                            return (
                                <div className=' recipt-box recipt-bg mt-1'>
                                    <p className='f3  fs-sm-10 fs-md-10 fs-lg-14 fs-xl-16 fs-xxl-18  gray1 text-center'>Bill No. {item.Bill}</p>
                                    <h4 className='f2 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22  white border-line pb-2 text-center'>Parcel Recipt</h4>
                                    <div className=''>
                                        <div className='d-flex ac-jb'>
                                            <p className='f3 fs-sm-10 fs-md-10 fs-lg-14 fs-xl-16 fs-xxl-18 gray1'> QT</p>
                                            <p className='f3 fs-sm-10 fs-md-10 fs-lg-14 fs-xl-16 fs-xxl-18 gray1'> Items</p>
                                            <p className='f3 fs-sm-10 fs-md-10 fs-lg-14 fs-xl-16 fs-xxl-18 gray1'> Price</p>
                                        </div>
                                        <div className='d-flex ac-jb'>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.qty}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.item1}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.price}</p>
                                        </div>
                                        <div className='d-flex ac-jb'>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.qty}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.item2}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.price}</p>
                                        </div>
                                        <div className='d-flex ac-jb border-line'>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.qty}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.item3}</p>
                                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 white'> {item.price}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex ac-jb'>
                                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 gray1'> Subtotal</p>
                                        <p className='f2 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 white'> {item.subtotal}</p>
                                    </div>
                                    <div className='text-center mb-2'>
                                        <button className='Paid-btn'>
                                            Paid
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default PrinterRecipt