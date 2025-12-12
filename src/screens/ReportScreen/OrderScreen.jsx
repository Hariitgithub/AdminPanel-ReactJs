import React from 'react'
import { cardpay, cash, clock, errors, online, ontime, search } from '../../assets/img'
import TopBar from '../../components/TopBar/TopBar'
import { Table } from '../../components/Table/Table'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import { oneTimeSms } from '../redux/api/dummyJson';
import { useNavigate } from 'react-router-dom';


const OrderScreen = () => {
    const navigate = useNavigate();
    const category = () => {
        navigate("/category");
    }

    const columns = React.useMemo(
        () => [
            {
                Header: "Table",
                accessor: "site",
                Cell: ({ value, row }) => {
                    return <p>{row.index + 1}</p>;
                },
            },
            {
                Header: "Orders Issue",
                accessor: "mode",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Issue ID",
                accessor: "startDate",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
        ],
        []
    );
    return (
        <div className="dashRightView home_section trans">

            <div className='d-flex ac-jb top-search-bar'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Order Screen</h4>
                <div className='d-flex ac-jc '>
                    <button className='add-bar-btn white ms-3' onClick={category}>
                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Order Screen</p>
                    </button>
                    <div className="d-flex align-items-center  border-search-non">
                        <img src={search} alt="" className='search-icon' />
                        <input type="text" name="location" placeholder='Search here....' className=' cust-btn ps-2 mb-1 white' />
                    </div>
                </div>
            </div>
            <div className='mt-5 d-flex flex-wrap justify-content-between gap-5 w-90 m-auto pb-5'>
                <div className='order-box1  text-center'>
                    <div className=' d-flex ac-je'>
                        <p className='f3 ord-num'>15</p>
                    </div>
                    <img src={clock} alt="" />
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mt-3 black'>Inventory Delayed Orders</h4>
                </div>
                <div className='order-box2 text-center'>
                    <div className=' d-flex ac-je'>
                        <p className='f3 ord-num'>40</p>
                    </div>
                    <img src={ontime} alt="" />
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mt-3 black'>On-Time Orders</h4>
                </div>
                <div className='order-box3 text-center'>
                    <div className=' d-flex ac-je'>
                        <p className='f3 ord-num'>25</p>
                    </div>
                    <img src={errors} alt="" />
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mt-3 black'>Order Errors</h4>
                </div>
                <div className='order-box4 text-center'>
                    <div className=' d-flex ac-je'>
                        <p className='f3 ord-num'>100+</p>
                    </div>
                    <img src={cardpay} alt="" />
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mt-3 black'>Pay by Card</h4>
                </div>
                <div className='order-box5 text-center'>
                    <div className=' d-flex ac-je'>
                        <p className='f3 ord-num'>107+</p>
                    </div>
                    <img src={online} alt="" />
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mt-3 black'>Pay by Link Online Orders</h4>
                </div>
                <div className='order-box6 text-center'>
                    <div className=' d-flex ac-je'>
                        <p className='f3 ord-num'>179+</p>
                    </div>
                    <img src={cash} alt="" />
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mt-3 black'>Cash on Pay</h4>
                </div>
            </div>
            <div className='mt-5'>
                <Table columns={columns} data={oneTimeSms} />
            </div>
        </div>
    )
}

export default OrderScreen