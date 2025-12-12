import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { delete_icon, edit_icon, search, toggleOff, toggleOn, view_icon } from '../../assets/img';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Table } from '../../components/Table/Table';
import { roles } from '../redux/api/dummyJson';
import TopBar from '../../components/TopBar/TopBar';

const Roles = () => {
    const navigate = useNavigate();
    const [isToggled, setIsToggled] = useState(false);

    const viewList = (type) => {
        navigate("/add-roles",{state:{type:type}});
    }
    let name = useSelector((state) => state.alertMessage)
    console.log(name);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }

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
                Header: "Name",
                accessor: "name",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },

            {
                Header: "Email",
                accessor: "email",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Role",
                accessor: "role",
                Cell: ({ value, row }) => {
                    return <p>{value}</p>;
                },
            },
            {
                Header: "Status",
                accessor: "",
                Cell: ({ value, row }) => {
                    return <React.Fragment>
                        <div>
                            <button onClick={handleChange}
                                className={`border-0 toggle-btn ${isToggled ? "on" : "off"}`}>
                                {isToggled ?
                                    <div><img className='w-50' src={toggleOn} /></div> :
                                    <div><img className='w-50' src={toggleOff} /></div>}
                            </button>
                        </div>
                    </React.Fragment>
                },
            },
            {
                Header: "Action",
                accessor: "",
                Cell: ({ value, row }) => {
                    return <React.Fragment>
                        <div className='d-flex ac-jc'>
                            <button className='cust-btn' onClick={()=>viewList('view')}>
                                <img src={view_icon} alt="" className='mx-2 view-btn' />
                            </button>
                            <button className='cust-btn ' onClick={()=>viewList('edit')}>
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
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Roles</h4>
                <div className='d-flex ac-jc '>
                    <button className='add-bar-btn white ms-3' onClick={()=>viewList('add')}>
                        <p className='f1 fs-sm-10 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 mb-0'> + Add Roles</p>
                    </button>
                </div>
            </div>
            <Table columns={columns} data={roles} />
        </div>
    )
}

export default Roles