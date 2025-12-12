import React from 'react'

const SubCategories = () => {
    return (
        <div className='d-flex flex-wrap justify-content-around px-4'>

            <div className="catbox-bg col-md-5 mt-5 pb-5 ">
                <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white bg-black border-top p-2">Drinks</p>
                <div className='bg-black d-flex ac-jb mt-3 p-2'>
                    <button className='cat-num '> Add/Update Items</button>
                    <div className='d-flex ac-jc '>
                        <button className='cat-num'>1</button>
                        <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white ps-2">27/04/2024</p>
                    </div>
                </div>
                <div className='bg-black d-flex ac-jb mt-3 p-2'>
                    <button className='cat-num '> Add/Update Items</button>
                    <div className='d-flex ac-jc '>
                        <button className='cat-num'>1</button>
                        <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white ps-2">27/04/2024</p>
                    </div>
                </div>
            </div>
            <div className="catbox-none col-md-5 mt-5 pb-5">
                <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white bg-black p-2">Special Offers</p>
                <div className='bg-black d-flex ac-jb mt-3 p-2'>
                    <button className='cat-num '> Add/Update Items</button>
                    <div className='d-flex ac-jc '>
                        <button className='cat-num'>20</button>
                        <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white ps-2">27/04/2024</p>
                    </div>
                </div>
            </div>
            <div className="catbox-bg col-md-5 mt-5 pb-5">
                <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white border-top bg-black p-2">Fresh Belgian waffles</p>
                <div className='bg-black d-flex ac-jb mt-3 p-2'>
                    <button className='cat-num '> Add/Update Items</button>
                    <div className='d-flex ac-jc '>
                        <button className='cat-num'>1</button>
                        <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white ps-2">27/04/2024</p>
                    </div>
                </div>
                <div className='bg-black d-flex ac-jb mt-3 p-2'>
                    <button className='cat-num '> Add/Update Items</button>
                    <div className='d-flex ac-jc '>
                        <button className='cat-num'>1</button>
                        <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white ps-2">27/04/2024</p>
                    </div>
                </div>
            </div>
            <div className="catbox-none col-md-5 mt-5 pb-5">
                <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white bg-black p-2">Dessert Dips</p>
                <div className='bg-black d-flex ac-jb mt-3 p-2'>
                    <button className='cat-num '> Add/Update Items</button>
                    <div className='d-flex ac-jc '>
                        <button className='cat-num'>20</button>
                        <p className="f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0 white ps-2">27/04/2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubCategories