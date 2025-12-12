import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { waiterAssign } from '../redux/api/dummyJson';
import TopBar from '../../components/TopBar/TopBar';
import { Table } from '../../components/Table/Table';
import { delete_icon, edit_icon, view_icon } from '../../assets/img';

const WaiterAssign = () => {
    const navigate = useNavigate();
    const addTask = (type) => {
        navigate("/add-waiter-assign",{state:{type:type}})
    };
    const columns = React.useMemo(
        () => [
            {
                Header: "S.NO",
                accessor: "sno",
                Cell: ({ value, row }) => {
                    return <p>{row.index + 1}</p>;
                },
            },
            {
                Header: "Kitchen Attender",
                accessor: "kitchenAttender",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },

            {
                Header: "Assign",
                accessor: "assign",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Action",
                accessor: "",
                Cell: ({ value, row }) => {
                    return <React.Fragment>
                        <div className='d-flex ac-jc'>
                            <button className='cust-btn' onClick={()=>addTask("view")}>
                                <img src={view_icon} alt="" className='mx-2 view-btn' />
                            </button>
                            <button className='cust-btn' onClick={()=>addTask("edit")}>
                                <img src={edit_icon} alt="" className='mx-2 view-btn ' />
                            </button>
                            <button className='cust-btn'>
                                <img src={delete_icon} alt="" className='mx-2 view-btn' />
                            </button>
                        </div>
                    </React.Fragment>
                },
            },
        ],
        []
    );
  return (
    <div className="dashRightView home_section trans">
    <div className='d-flex ac-jb top-search-bar'>
        <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Waiter Task Assign</h4>
        <div className='d-flex ac-jc '>
            <button className='add-bar-btn white ms-3' onClick={()=>addTask('add')}>
                <p className='f2 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Waiter Assign</p>
            </button>
        </div>
    </div>
    <Table columns={columns} data={waiterAssign} />
</div>
  )
}

export default WaiterAssign