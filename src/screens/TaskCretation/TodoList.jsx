import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ProgressBar } from 'react-bootstrap'
import { progress_circle, taskProfile } from '../redux/api/dummyJson';
import TopBar from '../../components/TopBar/TopBar';
import { blue1_noti, blue1_tool, blue2_noti, blue2_tool, red_noti, red_tool, tick_icon, untick_icon } from '../../assets/img';
import TodoListTask from '../../components/TaskCretation/TodoListTask';

const TodoList = () => {
    const navigate = useNavigate();
    const [tick, setTick] = useState(false);
    const checkCircle = () => {
        setTick(!tick);
    }



    return (
        <div className="dashRightView home_section trans">
            <div className='d-flex ac-jb top-search-bar'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Todo List</h4>
            </div>
            <div className='d-flex ac-jb mx-4 mt-4'>
                <div className='task-date col-md-4'>
                    <h2 className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20'>March</h2>
                    <p className='f1 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 gray task-dark'>Today is Thursday, March 20th, 2024</p>
                </div>
                <div className=' col-md-8'>
                    <div className='d-flex ac-jb w-100'>
                        <div className='d-flex align-items-center ms-3'>
                            <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0'>Board - </h2>
                            <select className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 cust-btn task-dark'><option>Daily Tasks</option></select>
                        </div>
                        <div className='task-profile'>
                            {taskProfile?.map((item) => {
                                return (
                                    <img src={item?.profileImg} alt="" />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='task-list col-md-4 mt-3 me-5 bg-white'>
                <TodoListTask />
            </div>
        </div>

    )
}
export default TodoList;