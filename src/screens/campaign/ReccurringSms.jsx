import React from 'react';
import { useSelector } from 'react-redux';
import { delete_icon, edit_icon, search, view_icon } from '../../assets/img';
import { Navigate, useNavigate } from 'react-router-dom';
import { oneTimeSms, recurringSms } from '../redux/api/dummyJson';
import TopBar from '../../components/TopBar/TopBar';
import { Table } from '../../components/Table/Table';

const ReccurringSms = () => {
    const navigate = useNavigate();

    const viewList = (type) => {
        navigate("/add-reccurring-sms", {state:{type:type}});
    }

    let name = useSelector((state) => state.alertMessage)
    console.log(name);
    const columns = React.useMemo(
        () => [
            {
                Header: "Site",
                accessor: "site",
                Cell: ({ value, row }) => {
                    return <p>{row.index + 1}</p>;
                },
            },
            {
                Header: "Start Date",
                accessor: "startDate",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },

            {
                Header: "End Date",
                accessor: "endDate",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Campaign",
                accessor: "Campaign",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "People",
                accessor: "people",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Approve / Decline",
                accessor: "approve",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Campaign Status",
                accessor: "campaignStatus",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "SMS Status",
                accessor: "smsStatus",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Email Status",
                accessor: "emailStatus",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Reason",
                accessor: "Reason",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Created By",
                accessor: "Createdby",
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
                            <button className='cust-btn' onClick={()=>viewList("view")}>
                                <img src={view_icon} alt="" className='mx-2 view-btn' />
                            </button>
                            <button className='cust-btn ' onClick={()=>viewList("edit")}>
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
            <div>
                <div className='d-flex ac-jb top-search-bar'>
                    <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 white ps-4'>Recurring SMS/Email</h4>
                    <div className='d-flex ac-jc '>
                        <button className='add-bar-btn white ms-3'  onClick={()=>viewList("add")}>
                            <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Recurring SMS/Email</p>
                        </button>
                    </div>
                </div>
                <Table columns={columns} data={recurringSms} />
            </div>
        </div>
    )
}


export default ReccurringSms