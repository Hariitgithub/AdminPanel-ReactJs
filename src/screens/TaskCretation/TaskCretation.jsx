import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import { profile, sample, sample1 } from '../../assets/img'
import { useNavigate } from 'react-router-dom'
import { taskProfile } from '../redux/api/dummyJson'
import InProgress from '../../components/TaskCretation/InProgress'
import InReview from '../../components/TaskCretation/InReview'
import TodoListTask from '../../components/TaskCretation/TodoListTask'

const TaskCretation = () => {
    const navigate = useNavigate();
    const addTask = () => {
        navigate("/")
    }
    return (
        <div className="dashRightView home_section trans">

            <div className='d-flex ac-jb top-search-bar'>
                <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0 ps-4 white'>Task Cretation</h4>
            </div>
            <div className='d-flex ac-jb mx-4 mt-4'>
                <div className='task-date pe-5'>
                    <h2 className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20'>March</h2>
                    <p className='f2 fs-sm-8 fs-md-10 fs-lg-12 fs-xl-14 fs-xxl-16 gray task-dark'>Today is Thursday, March 20th, 2024</p>
                </div>
                <div className=' col-md-8'>
                    <div className='d-flex ac-jb w-100'>
                        <div className='d-flex align-items-center ms-3'>
                            <h2 className='f4 fs-sm-10 fs-md-16 fs-lg-18 fs-xl-20 fs-xxl-22 mb-0'>Board - </h2>
                            <select className='f3 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 cust-btn gray task-dark'><option>Daily Tasks</option></select>
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
            <div className=' px-2 my-3 overflow-scroll'>
                <div className='task-list w-30 my-3 bg-white'>
                    <TodoListTask />
                </div>
                <div className='task-list w-30 mt-3 ms-4 bg-white'>
                    <InProgress />
                </div>
                <div className='task-list w-30 my-3 ms-4 bg-white'>
                    <InReview />
                </div>
            </div>

        </div>
    )
}

export default TaskCretation