import React from 'react';
import CampaignOneTime from './screens/campaign/CampaignOneTime';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import "../src/assets/style/style.scss";
import "../src/assets/style/color.scss";
import "../src/assets/style/custome.scss";
import "../src/assets/style/height.scss";
import "../src/assets/style/responsive.scss";
import "../src/assets/style/width.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AddOneTimeSMS from './screens/campaign/AddOneTimeSMS';
import ReccurringSms from './screens/campaign/ReccurringSms';
import AddRecurringSMS from './screens/campaign/AddRecurringSMS';
import Dashboard from './screens/dashboard/Dashboard';  
import Admin from './screens/Admins/Admin';
import AddAdmin from './screens/Admins/AddAdmin';
import Roles from './screens/roles/Roles';
import AddRole from './screens/roles/AddRole';
import Department from './screens/department/Department';
import AddDepartment from './screens/department/AddDepartment';
import Table from './screens/Table';
import NewData from './screens/Table';
import Login from './screens/Login/Login';
import TaskCretation from './screens/TaskCretation/TaskCretation';
import TodoList from './screens/TaskCretation/TodoList';
import InProcess from './screens/TaskCretation/InProcess';
import TaskAssign from './screens/TaskAssign/TaskAssign';
import AddTaskAssign from './screens/TaskAssign/AddTaskAssign';
import WaiterAssign from './screens/TaskAssign/WaiterAssign';
import AddWaiterAssign from './screens/TaskAssign/AddWaiterAssign';
import InReviewTask from './screens/TaskCretation/InReviewTask';
import BusinessDetails from './screens/BusinessDetails/BusinessDetails';
import ViewBusiness from './screens/BusinessDetails/ViewBusiness';
import OnBoarding from './screens/Onboarding/OnBoarding';
import AddOnBoarding from './screens/Onboarding/AddOnBoarding';
import GoCardLess from './screens/GoCardLess/GoCardLess';
import Manager from './screens/manager/Manager';
import Loyalty from './screens/Loyalty/Loyalty';
import Seo from './screens/Seo/Seo';
import Delivery from './screens/Delivery/Delivery';
import Orders from './screens/Orders/Orders';
import Website from './screens/Website/Website';
import Apps from './screens/Apps/Apps';
import PrinterRecipt from './screens/PrinterRecipt/PrinterRecipt';
import OrderScreen from './screens/ReportScreen/OrderScreen';
import Layout1 from './components/Layout/Layout1';
import Category from './screens/Category/Category';
import CategoryConfig from './screens/Category/CategoryConfig';
import PrinterProfile from './screens/PrinterProfile/PrinterProfile';
import Layout2 from './components/Layout/Layout2';
import Dispatchers from './screens/Dispatchers/Dispatchers';
import DriverDetails from './screens/DriverDetails/DriverDetails';
import OrderRecipt from './screens/OrderRecipt/OrderRecipt';
import Dashboard1 from './screens/Dashboard1/Dashboard1';

const ReactRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<Layout />}>
                <Route path="/campaign-sms" element={<CampaignOneTime />} />
                <Route path='/add-one-time-sms' element={<AddOneTimeSMS />} />
                <Route path='/reccurring-sms' element={<ReccurringSms />} />
                <Route path='/add-reccurring-sms' element={<AddRecurringSMS />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/add-admin' element={<AddAdmin />} />
                <Route path='/roles' element={<Roles />} />
                <Route path='/add-roles' element={<AddRole />} />
                <Route path='/department' element={<Department />} />
                <Route path='/add-department' element={<AddDepartment />} />
                <Route path='/table' element={<NewData />} />
                <Route path='/task-cretation' element={<TaskCretation />} />
                <Route path='/task-todo-list' element={<TodoList />} />
                <Route path='/task-inprocess' element={<InProcess />} />
                <Route path='/task-inreview' element={<InReviewTask />} />
                <Route path='/task-assign' element={<TaskAssign />} />
                <Route path='/add-task-assign' element={<AddTaskAssign />} />
                <Route path='/waiter-assign' element={<WaiterAssign />} />
                <Route path='/add-waiter-assign' element={<AddWaiterAssign />} />
                <Route path='/business-details' element={<BusinessDetails />} />
                <Route path='/view-business-details' element={<ViewBusiness />} />
                <Route path='/onboarding' element={<OnBoarding />} />
                <Route path='/add-onboarding' element={<AddOnBoarding />} />
                <Route path='/go-cardless' element={<GoCardLess />} />
                <Route path='/manager' element={<Manager />} />
                <Route path='/loyalty' element={<Loyalty />} />
                <Route path='/seo' element={<Seo />} />
                <Route path='/delivery' element={<Delivery />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/website' element={<Website />} />
                <Route path='/apps' element={<Apps />} />
                <Route path='/printer-recipt' element={<PrinterRecipt />} />
                <Route path='/order-recipt' element={<OrderRecipt />} />
                <Route path='/order-screen' element={<OrderScreen />} />
                <Route path='/dispatchers' element={<Dispatchers />} />
                <Route path='/driver-details' element={<DriverDetails />} />
                <Route path='/dash-board1' element={<Dashboard1 />} />

            </Route>
            <Route element={<Layout1 />} >
                <Route path='/printer-profile' element={<PrinterProfile />} />
            </Route>
            <Route element={<Layout2 />} >
                <Route path='/category' element={< Category />} />
                <Route path='/category-config' element={< CategoryConfig />} />
            </Route>
        </Routes>
    )
}

export default ReactRoutes;
