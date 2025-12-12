import React from 'react'
import { useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table } from '../../components/Table/Table';
import TopBar from '../../components/TopBar/TopBar';
import { businessDetails, taskAssign } from '../redux/api/dummyJson';

const BusinessDetails = () => {
    const navigate = useNavigate();
    const addTask = (type) => {
        navigate("/view-business-details",{state:{type:type}})
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
                Header: "Generate",
                accessor: "Generate",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header:"View",
                accessor: "",
                Cell: ({ value, row }) => {
                    return <React.Fragment>
                        <button className='cust-btn d-flex ac-jc w-100'  onClick={()=>addTask('view')}>
                            <RemoveRedEyeIcon  className='mx-2 view-btn' />
                        </button>
                    </React.Fragment>
                },
            },
        ],
        []
    );
    return (
        <div className="dashRightView home_section trans">
            <div className='d-flex ac-jb top-search-bar'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Business Details</h4>
                <div className='d-flex ac-jc '>
                    <button className='add-bar-btn white ms-3'  onClick={()=>addTask('add')}>
                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Details</p>
                    </button>
                </div>
            </div>
            <Table columns={columns} data={businessDetails} />
        </div>
    )
}

export default BusinessDetails