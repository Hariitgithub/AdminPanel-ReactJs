import React, { useEffect, useState } from "react";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonIcon from "@mui/icons-material/Person";
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
// import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
// import WarehouseIcon from "@mui/icons-material/Warehouse";
import { useLocation, useNavigate } from "react-router-dom";
// import LogoutIcon from "@mui/icons-material/Logout";
// import GroupsIcon from "@mui/icons-material/Groups";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
// import SideBarComp from "./SideBarComp";
// import SideBarComp2 from "./SideBarComp2";
// import MenuIcon from "@mui/icons-material/Menu";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import { animatedImg, logos } from "../../assets/img";

// import CategoryIcon from "@mui/icons-material/Category";
// import { ArrowBackIosNewSharp, Support } from "@mui/icons-material";
// import { useLazyLogoutQuery } from "../../redux/api/api";
// import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import LocalActivityIcon from "@mui/icons-material/LocalActivity";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
// import LogoutPopup from "../Popup/LogoutPopup";
import { admin, campaign, dashboard, logo, role, task } from "../assets/img";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ProfileNavBar = ({ setSaidList }) => {
  const [saideBarShow, setSaidBarShow] = useState(true);
  const [logoutPopupShow, setLogoutPopupShow] = useState(false);
  const [customerDash, setCustomerDash] = useState(false);
  const [enterprises, setEnterprises] = useState(false);
  const [helpDeskDown, setHelpDeskDown] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [navState, setNavState] = useState(undefined);
  const [cretationState, setCretationState] = useState(undefined);
  const [assignState, setAssignState] = useState(undefined);
  const [activity, setActivity] = useState(false);
  const [notify, setNotify] = useState(false);
  // All Dropdowns
  const [roles, setRoles] = useState(false);
  const [ourPacks, setOurPacks] = useState(false);
  const [enableDown, setEnableDown] = useState(false);
  const [prodManagement, setProdManagement] = useState(false);
  const [businessDetails, setBusinessDetails] = useState(false);
  const [onboarding, setOnboarding] = useState(false);
  const [seo, setSeo] = useState(false);
  const [cardless, setCardLess] = useState(false);
  const [manager, setManager] = useState(false);
  const [loyalty, setLoyalty] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [orders, setOrders] = useState(false);
  const [website, setWebsite] = useState(false);
  const [apps, setApps] = useState(false);
  const [printer, setPrinter] = useState(false);
  const [report,setReport]=useState(false);
  const [menu,setMenu]=useState(false);
  const [profile,setProfile]=useState(false);
  const [dashCat,setDashCat]=useState(false);
  const [customerDown, setCustomerDown] = useState(false);
  const [adminRequest, setAdminRequst] = useState(false);
  const [siteManagement, setSiteManagement] = useState(false);
  const [production, setProduction] = useState(false);
  const [manageOrder, setManageOrder] = useState(false);
  const [dispatchers,  setDispatchers] = useState(false);
  const [driverDetails,  setDriverDetails] = useState(false);

  const [support, setSupport] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [btn, setBtn] = useState(false);
  // console.log("Split________", splitLocation);

  // RTK QUERY

  //   const [logout] = useLazyLogoutQuery();

  //   const submitLogout = () => {
  //     setBtn(true);
  //     logout()
  //       .unwrap()
  //       .then((res) => {
  //         if (res?.status == "success") {
  //           localStorage.clear();
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 400);
  //         }
  //         setBtn(false);
  //       })
  //       .catch((err) => {
  //         console.log("err");
  //         setBtn(false);
  //       });
  //   };

  //   useEffect(() => {
  //     if (splitLocation[1] === "") {
  //       navigate("/home");
  //     }
  //   }, []);

  const toggle_nav = () => {
    setSaidBarShow(!saideBarShow);
  };

  const toggleLogoutPopup = () => {
    setLogoutPopupShow(!logoutPopupShow);
  };

  return (
    <div
      //   className={`${saideBarShow ? "close_sidebar trans" : "sidebar trans bg-black "}`}
      className="sidebar trans bg-black "
    >
      <header>
        <div className="image_text">
          {/* <span className="image">
            <img src={animatedImg} />
          </span> */}
          <div className="header_text d-flex ac-jc">
            <span
              className={`${saideBarShow
                ? "f4 fs-10"
                : "f4 fs-sm-10 fs-md-25 fs-lg-27 fs-xl-29 fs-xxl-30"
                } name primary trans `}
            >
              <img src={logo} className="logo" alt="" />
            </span>
            <span className="d-flex ac-jc">
              <h2 className="f8 text fs-sm-10 fs-md-10 fs-lg-11 fs-xl-15 fs-xxl-18 white mb-0">OrderZest</h2>
            </span>
          </div>
        </div>
        {/* <div
          style={{
            height: !saideBarShow ? "20px" : "20px",
            width: !saideBarShow ? "20px" : "20px",
          }}
          className="toggle cp d-flex ac-jc trans"
          onClick={() => {
            toggle_nav();
            setEnableDown(false);
            setProdManagement(false);
            setCustomerDown(false);
            setSiteManagement(false);
            setProduction(false);
          }}
        > */}
        {/* <ArrowForwardIosIcon
            style={{
              transform: `rotateY(${!saideBarShow ? "180deg" : "0deg"})`,
              transition: "0.4s all linear",
            }}
            className={`${
              !saideBarShow
                ? " fs-sm-16 fs-md-17 fs-lg-18 fs-xl-19 fs-xxl-20"
                : "fs-10"
            } f5 text-light`}
          /> */}
        {/* {saideBarShow ? (
            <ArrowForwardIosIcon
              className="f5 fs-sm-16 fs-md-17 fs-lg-18 fs-xl-19
           fs-xxl-20 text-light"
            />
          ) : (
            <ArrowBackIosNewIcon 
              className="f5 fs-sm-16 fs-md-17 fs-lg-18 fs-xl-19
           fs-xxl-20 text-light"
            />
          )} */}
        {/* </div> */}
      </header>
      <div className="menu_bar overflow-x-hidden overflow-scroll">
        <div className="menu">
          <ul className="menu_links ps-0">
            <li
              className="nav_link trans mb-0"
              onClick={() => {
                setRoles(!roles);
                setNavState("navlink");
                setPrinter(false);
                setWebsite(false);
                setReport(false);
                setProfile(false);
                setApps(false);
                setOrders(false);
                setDriverDetails(false);
                setDispatchers(false);
                setDelivery(false);
                setSeo(false);
                setLoyalty(false);
                setManager(false);
                setCardLess(false);
                setBusinessDetails(false);
                setOnboarding(false);
                setEnableDown(false);
                setCustomerDash(false);
                setProdManagement(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setProduction(false);
                setSaidBarShow(false);
                setAdminRequst(false);
                setOurPacks(false);
              }}
            >
              <h4
                className={` ${roles ||
                  splitLocation[1] === ""
                  ? " active_bar f3"
                  : "white f1"
                  } trans  f1 fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                {/* <PermContactCalendarIcon className=" icon" /> */}
                <img src={campaign} className="icon " alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Campaign
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            {roles && (
              <div className=" nav-dropdown">

                <li
                  className="nav_link text-center trans sidebar-drop"
                  onClick={() => {
                    navigate("/campaign-sms");
                  }}
                >
                  <p
                    className={` ${navState === "navlink" &&
                      splitLocation[1] === "campaign-sms"
                      ? " active_bar_drop f3"
                      : "white f1"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>One Time SMS/Email
                    {/* <SupervisorAccountIcon className="gray invisible trans f1 fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 icon" /> */}

                  </p>
                </li>

                <li
                  className="nav_link text-center trans sidebar-drop"
                  onClick={() => {
                    navigate("/reccurring-sms");
                  }}
                >
                  <p
                    className={` ${navState === "navlink" &&
                      splitLocation[1] === "reccurring-sms"
                      ? "active_bar_drop f3"
                      : "white f1"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>Recurring SMS/Email
                    {/* <SupervisorAccountIcon className="gray invisible trans f1 fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 icon" /> */}

                  </p>
                </li>

              </div>
            )}
            {/* <li
              className="nav_link trans"
              onClick={() => {
                navigate("/dashboard");
                setPrinter(false);
                setSeo(false);
                setWebsite(false);
                setProfile(false);
                setReport(false);
                setEnableDown(false);
                setApps(false);
                setOrders(false);
                setDelivery(false);
                setLoyalty(false);
                setManager(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setProduction(!production);
                setCardLess(false);
                setCustomerDash(false);
                setProdManagement(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setProduction(false);
                setSaidBarShow(false);
                setRoles(false);
                setOurPacks(false);
                setAdminRequst(false);
              }}
            >
              <h4
                className={` ${production ||
                  splitLocation[1] === "dashboard"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                <img src={dashboard} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  {" "}
                  Dashboard
                </span>
                <span className=" nav_dot" />
              </h4>
            </li> */}
            <li
              className="nav_link trans"
              onClick={() => {
                navigate("/admin");
                setPrinter(false);
                setNavState("navlink");
                setWebsite(false);
                setApps(false);
                setProfile(false);
                setDelivery(false);
                setReport(false);
                setOrders(false);
                setSeo(false);
                setDispatchers(false);
                setLoyalty(false);
                setDriverDetails(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setCustomerDash(false);
                setBusinessDetails(false);
                setEnableDown(false);
                setProdManagement(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setProduction(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
              }}
            >
              <h4
                className={` ${(navState === "navlink" && splitLocation[1] === "admin") ||
                  splitLocation[1] === "add-profile" ||
                  splitLocation[1] === "view-profile" ||
                  splitLocation[1] === "edit-profile"
                  ? " f3 active_bar"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                {/* <PersonIcon className="icon" /> */}
                <img src={admin} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Admin
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>

            <li
              className="nav_link trans"
              onClick={() => {
                navigate("/roles");
                setPrinter(false);
                // setNavState("navlink");
                setCustomerDash(false);
                setWebsite(false);
                setProfile(false);
                setApps(false);
                setOrders(false);
                setReport(false);
                setDelivery(false);
                setSeo(false);
                setDriverDetails(false);
                setDispatchers(false);
                setLoyalty(false);
                setManager(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setEnableDown(false);
                setOurPacks(!ourPacks);
                setCardLess(false);
                setProdManagement(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setProduction(false);
                setSaidBarShow(false);
                setRoles(false);
                setAdminRequst(false);
              }}
            >
              <h4
                className={` ${ourPacks ||
                  splitLocation[1] === "roles"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                {/* <LocalGroceryStoreIcon className=" icon" /> */}
                <img src={role} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  {" "}
                  Roles
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>

            <li
              className="nav_link trans"
              onClick={() => {
                navigate("/department");
                setLoyalty(false);
                setPrinter(false);
                setWebsite(false);
                setReport(false);
                setApps(false);
                setProfile(false);
                setEnableDown(!enableDown);
                setOrders(false);
                setDispatchers(false);
                setDelivery(false);
                setSeo(false);
                setManager(false);
                setDriverDetails(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setHelpDeskDown(false);
                setProdManagement(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setProduction(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
              }}
            >
              <h4
                className={` ${enableDown ||
                  splitLocation[1] === "department"
                  ? " active_bar f3"
                  : "white f1"
                  } trans fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                {/* <SupervisorAccountIcon className=" icon" /> */}
                <img src={role} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Department
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            {/* <li
              className="nav_link trans"
              onClick={() => {
                navigate("/table");
                setEnableDown(!enableDown);
                setHelpDeskDown(false);
                setEnableDown(false);
                setProdManagement(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setProduction(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
              }}
            >
              <p
                className={` ${enableDown ||
                  splitLocation[1] === "table"
                  ? " active_bar f4"
                  : "white f1"
                  } trans fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
            
                <img src={role} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Table
                </span>
                <span className=" nav_dot" />
              </p>
            </li> */}

            <li
              className="nav_link trans"
              onClick={() => {
                setProdManagement(!prodManagement);
                setHelpDeskDown(false);
                setBusinessDetails(false);
                setWebsite(false);
                setApps(false);
                setSeo(false);
                setOnboarding(false);
                setCretationState("taskCretation")
                setOrders(false);
                setReport(false);
                setDriverDetails(false);
                setPrinter(false);
                setCardLess(false);
                navigate("/task-cretation");
                setDelivery(false);
                setProfile(false);
                setDispatchers(false);
                setLoyalty(false);
                setManager(false);
                setCustomerDash(false);
                setEnableDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setProduction(false);
                setSaidBarShow(false);
                setOurPacks(false);
                // setNavState('navlink2')
                setRoles(false);
                setAdminRequst(false);
              }}
            >
              <h4
                className={` ${prodManagement ||
                  splitLocation[1] === "product-feed"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                {/* <WarehouseIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Task Creatation
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            {prodManagement && (
              <div className=" nav-dropdown">

                <li
                  className="nav_link text-center trans sidebar-drop"
                  onClick={() => {
                    navigate("/task-todo-list");
                  }}
                >
                  <p
                    className={` ${cretationState === "taskCretation" &&
                      splitLocation[1] === "task-todo-list"
                      ? " active_bar_drop f3"
                      : "white f1"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>Todo List
                    {/* <SupervisorAccountIcon className="gray invisible trans f1 fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 icon" /> */}

                  </p>
                </li>

                <li
                  className="nav_link text-center trans sidebar-drop"
                  onClick={() => {
                    navigate("/task-inprocess");
                  }}
                >
                  <p
                    className={` ${cretationState === "taskCretation" &&
                      splitLocation[1] === "task-inprocess"
                      ? "active_bar_drop f3"
                      : "white f1"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>InProcess
                    {/* <SupervisorAccountIcon className="gray invisible trans f1 fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 icon" /> */}

                  </p>
                </li>
                <li
                  className="nav_link text-center trans sidebar-drop"
                  onClick={() => {
                    navigate("/task-inreview");
                  }}
                >
                  <p
                    className={` ${cretationState === "taskCretation" &&
                      splitLocation[1] === "task-inreview"
                      ? "active_bar_drop  f3"
                      : "white f1"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>InReview
                    {/* <SupervisorAccountIcon className="gray invisible trans f1 fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 icon" /> */}

                  </p>
                </li>

              </div>
            )}


            <li
              className="nav_link trans trans"
              onClick={() => {
                setCustomerDash(!customerDash);
                setOrders(false);
                setApps(false);
                setCardLess(false);
                setAssignState("assignState");
                setPrinter(false);
                setWebsite(false);
                setDelivery(false);
                setSeo(false);
                setProfile(false);
                setDriverDetails(false);
                setLoyalty(false);
                setDispatchers(false);
                setManager(false);
                setBusinessDetails(false);
                setOnboarding(false);
                setReport(false);
                setEnterprises(false);
                setCustomerDown(false);
                setHelpDeskDown(false);
                // navigate("/task-assign");
                setProdManagement(false);
                setEnableDown(false);
                setSiteManagement(false);
                setProduction(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
              }}
            >
              <h4
                className={` ${customerDash ||
                  splitLocation[1] === "assignState"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Task Assign
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            {customerDash && (
              <div className=" nav-dropdown">

                <li
                  className="nav_link text-center trans sidebar-drop"
                  onClick={() => {
                    navigate("/task-assign");
                  }}
                >
                  <p
                    className={` ${assignState === "assignState" &&
                      splitLocation[1] === "task-assign"
                      ? " active_bar_drop f3"
                      : "white f1"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>Kitchen
                    {/* <SupervisorAccountIcon className="gray invisible trans f1 fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 icon" /> */}

                  </p>
                </li>

                <li
                  className="nav_link text-center trans sidebar-drop"
                  onClick={() => {
                    navigate("/waiter-assign");
                  }}
                >
                  <p
                    className={` ${assignState === "assignState" &&
                      splitLocation[1] === "waiter-assign"
                      ? "active_bar_drop f3"
                      : "white f1"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>Waiter
                    {/* <SupervisorAccountIcon className="gray invisible trans f1 fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 icon" /> */}

                  </p>
                </li>

              </div>
            )}


            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/business-details");
                setPrinter(false);
                setApps(false);
                setOrders(false);
                setWebsite(false);
                setDelivery(false);
                setProfile(false);
                setSeo(false);
                setLoyalty(false);
                setManager(false);
                setOnboarding(false);
                setDriverDetails(false);
                setReport(false);
                setCustomerDash(false);
                setProduction(false);
                setBusinessDetails(!businessDetails);
                setCardLess(false);
                setDispatchers(false);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${businessDetails ||
                  splitLocation[1] === "business-details"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Business Details
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>

            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/onboarding");
                setApps(false);
                setPrinter(false);
                setProfile(false);
                setOrders(false);
                setWebsite(false);
                setDelivery(false);
                setSeo(false);
                setLoyalty(false);
                setManager(false);
                setReport(false);
                setDriverDetails(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setDispatchers(false);
                setOnboarding(!onboarding);
                setCardLess(false);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${onboarding ||
                  splitLocation[1] === "onboarding"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Onboarding
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/go-cardless");
                setPrinter(false);
                setApps(false);
                setOrders(false);
                setWebsite(false);
                setDelivery(false);
                setSeo(false);
                setProfile(false);
                setLoyalty(false);
                setManager(false);
                setOnboarding(false);
                setDriverDetails(false);
                setDispatchers(false);
                setReport(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setCardLess(!cardless);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${cardless ||
                  splitLocation[1] === "cardless"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  GocardLess
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/manager");
                setPrinter(false);
                setApps(false);
                setWebsite(false);
                setDelivery(false);
                setOrders(false);
                setSeo(false);
                setLoyalty(false);
                setCardLess(false);
                setOnboarding(false);
                setProfile(false);
                setDriverDetails(false);
                setDispatchers(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setReport(false);
                setManager(!manager);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${manager ||
                  splitLocation[1] === "manager"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Manager/TL
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/loyalty");
                setPrinter(false);
                setApps(false);
                setWebsite(false);
                setOrders(false);
                setDelivery(false);
                setSeo(false);
                setManager(false);
                setCardLess(false);
                setProfile(false);
                setDriverDetails(false);
                setOnboarding(false);
                setDispatchers(false);
                setReport(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setLoyalty(!loyalty);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${loyalty ||
                  splitLocation[1] === "loyalty"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Loyalty
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/seo");
                setPrinter(false);
                setApps(false);
                setWebsite(false);
                setOrders(false);
                setDelivery(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setReport(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setLoyalty(false);
                setSeo(!seo);
                setDriverDetails(false);
                setDispatchers(false);
                setProfile(false);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${seo ||
                  splitLocation[1] === "seo"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Seo
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/delivery");
                setWebsite(false);
                setPrinter(false);
                setApps(false);
                setOrders(false);
                setSeo(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setReport(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setDriverDetails(false);
                setProfile(false);
                setDispatchers(false);
                setDelivery(!delivery);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${delivery ||
                  splitLocation[1] === "delivery"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Delivery
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/orders");
                setPrinter(false);
                setApps(false);
                setWebsite(false);
                setDelivery(false);
                setSeo(false);
                setReport(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setProfile(false);
                setDispatchers(false);
                setOrders(!orders);
                setDriverDetails(false);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${orders ||
                  splitLocation[1] === "orders"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Orders
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/website");
                setPrinter(false);
                setApps(false);
                setDelivery(false);
                setDriverDetails(false);
                setOrders(false);
                setSeo(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                 setReport(false);
                setWebsite(!website);
                setProfile(false);
                setProdManagement(false);
                setEnableDown(false);
                setDispatchers(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${website ||
                  splitLocation[1] === "website"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Website
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/apps");
                setPrinter(false);
                setDelivery(false);
                setOrders(false);
                setWebsite(false);
                setSeo(false);
                setLoyalty(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setDriverDetails(false);
                setReport(false);
                setProfile(false);
                setApps(!apps);
                setDispatchers(false);
                setPrinter(false);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${apps ||
                  splitLocation[1] === "apps"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Apps
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/printer-recipt");
                setApps(false);
                setDelivery(false);
                setOrders(false);
                setWebsite(false);
                setSeo(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setDriverDetails(false);
                setReport(false);
                setProfile(false);
                setDispatchers(false);
                setPrinter(!printer);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${printer ||
                  splitLocation[1] === "printer"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Printer(recipt)
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/order-screen");
                setApps(false);
                setDelivery(false);
                setOrders(false);
                setWebsite(false);
                setPrinter(false);
                setSeo(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setProfile(false);
                setDriverDetails(false);
                setReport(!report);
                setProdManagement(false);
                setEnableDown(false);
                setDispatchers(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${report ||
                  splitLocation[1] === "report"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Order Screen
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/category");
                setApps(false);
                setDelivery(false);
                setOrders(false);
                setWebsite(false);
                setPrinter(false);
                setSeo(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setReport(false);
                setProfile(false);
                setDispatchers(false);
                setMenu(!menu);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setDriverDetails(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${menu ||
                  splitLocation[1] === "category"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Menu
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/category-config");
                setApps(false);
                setDelivery(false);
                setOrders(false);
                setWebsite(false);
                setPrinter(false);
                setSeo(false);
                setManager(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setReport(false);
                setDispatchers(false);
                setProfile(false);
                setMenu(false);
                setDashCat(!dashCat);
                setDriverDetails(false);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${dashCat ||
                  splitLocation[1] === "category-config"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Dashboard
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/printer-profile");
                setApps(false);
                setDelivery(false);
                setOrders(false);
                setWebsite(false);
                setPrinter(false);
                setSeo(false);
                setManager(false);
                setReport(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setDriverDetails(false);
                setProfile(!profile);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setDispatchers(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${profile ||
                  splitLocation[1] === "printer-profile"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Printer Profile   
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/dispatchers");
                setApps(false);
                setDelivery(false);
                setOrders(false);
                setWebsite(false);
                setPrinter(false);
                setSeo(false);
                setManager(false);
                setReport(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setProfile(false);
                setDriverDetails(false);
                setDispatchers(!dispatchers);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${dispatchers ||
                  splitLocation[1] === "dispatchers"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                 Dispatchers   
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>
            <li
              className="nav_link trans trans mb-5"
              onClick={() => {
                navigate("/driver-details");
                setApps(false);
                setDelivery(false);
                setOrders(false);
                setWebsite(false);
                setPrinter(false);
                setSeo(false);
                setManager(false);
                setReport(false);
                setCardLess(false);
                setOnboarding(false);
                setBusinessDetails(false);
                setCustomerDash(false);
                setProduction(false);
                setProfile(false);
                setDriverDetails(!driverDetails);
                setDispatchers(false);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                // setNotify(!notify);
              }}
            >
              <h4
                className={` ${driverDetails ||
                  splitLocation[1] === "driver-details"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                {/* <GroupsIcon className="icon" /> */}
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                 Driver Details   
                </span>
                <span className=" nav_dot" />
              </h4>
            </li>

            {/* <li
              className="nav_link trans"
              onClick={() => {
                setBusinessDetails(!businessDetails);
                setHelpDeskDown(false);
                setCretationState("taskCretation")
                navigate("/task-cretation");
                setCustomerDash(false);
                setEnableDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setProduction(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
              }}
            >
              <h4
                className={` ${businessDetails ||
                  splitLocation[1] === "product-feed"
                  ? " active_bar f4"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Business Details
                </span>
                <span className=" nav_dot" />
              </h4>
            </li> */}
            {/* <li
              className="nav_link trans trans mb-5"
              onClick={() => {
                setLogoutPopupShow(true);
                setProduction(false);
                setProdManagement(false);
                setEnableDown(false);
                setHelpDeskDown(false);
                setCustomerDown(false);
                setSiteManagement(false);
                setManageOrder(false);
                setSaidBarShow(false);
                setOurPacks(false);
                setRoles(false);
                setAdminRequst(false);
                setNotify(!notify);
              }}
            >
              <p
                className={` ${"text-dark f1"} trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <LogoutIcon className="icon" />
                <span className="gray text text-nowrap f2 fs-xs-10 trans fs-sm-11 fs-md-12 fs-lg-13 fs-xl-14 fs-xxl-15">
                  Logout
                </span>
              </p>
            </li> */}
          </ul>
        </div>
        {/* <div className="bottom_cont" onClick={() => setSaidBarShow(false)}>
          <li className="nav_link trans">
            <p
              className={` ${
                splitLocation[1] === "logout"
                  ? "primary bg-lt-blue1 f4"
                  : "gray f1"
              } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20  `}
            >
              {" "}
              <button
                className="border-0 bg-transparent d-flex"
                onClick={submitLogout}
                disabled={btn ? true : false}
              >
                <LogoutIcon className=" icon" />

                <span className="gray text text-nowrap f2 fs-xs-10 trans fs-sm-11 fs-md-12 fs-lg-13 fs-xl-14 fs-xxl-15 mt-1">
                  Logout
                </span>
              </button>
            </p>
          </li>
        </div> */}
      </div>
      {/* {logoutPopupShow && (
        <LogoutPopup
          onCancelClick={toggleLogoutPopup}
          onConfirmClick={submitLogout}
        />
      )} */}
    </div>
  );
};

export default ProfileNavBar;
