import React from 'react'
import TopBar from '../../components/TopBar/TopBar';
import { Table } from '../../components/Table/Table';
import { businessDetails } from '../redux/api/dummyJson';
import { useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import { delete_icon, edit_icon, view_icon } from '../../assets/img';

const OnBoarding = () => {
    const navigate = useNavigate();
    const addTask = (type) => {
        navigate("/add-onboarding", {state:{type:type}})
    };
    const columns = React.useMemo(
        () => [
            {
                Header: "Business Name",
                accessor: "businessName",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Register Mobile Number",
                accessor: "registeredMobileNumber",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },

            {
                Header: "Send Order Via Text",
                accessor: "sendOrderViaText",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Info Email Address",
                accessor: "infoEmailAddress",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Forwarded Email Address",
                accessor: "forwardedEmailAddress",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Door Number",
                accessor: "doorNumber",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Street",
                accessor: "street",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Town",
                accessor: "town",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "City",
                accessor: "city",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Post Code",
                accessor: "postCode",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ value, row }) => {
                    return <p className={`${value === "Completed" ? "green" : "err"} me-2`}>{value}</p>;
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
                            <button className='cust-btn ' onClick={()=>addTask("edit")}>
                                <img src={edit_icon} alt="" className='mx-2 view-btn ' />
                            </button>
                            <button className='cust-btn  '>
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
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Onboarding</h4>
                <div className='d-flex ac-jc '>
                    <button className='add-bar-btn white ms-3' onClick={()=>addTask("add")}>
                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Onboarding</p>
                    </button>
                </div>
            </div>
            <Table columns={columns} data={businessDetails} />
        </div>
    )
}

export default OnBoarding