import React, { useEffect, useState } from "react";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonIcon from "@mui/icons-material/Person";
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
// import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
// import WarehouseIcon from "@mui/icons-material/Warehouse";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
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
import { admin, arrow_down, campaign, dashboard, logo, role, task } from "../assets/img";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const ProfileNavBar = ({ setSaidList }) => {
  const [saideBarShow, setSaidBarShow] = useState(true);
  const [logoutPopupShow, setLogoutPopupShow] = useState(false);
  const [customerDash, setCustomerDash] = useState(null);
  const [prodManagement, setProdManagement] = useState(null);
  const [enterprises, setEnterprises] = useState(false);
  const [helpDeskDown, setHelpDeskDown] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [navState, setNavState] = useState(undefined);
  const [cretationState, setCretationState] = useState(undefined);
  const [assignState, setAssignState] = useState(undefined);
  const [activity, setActivity] = useState(false);
  const [notify, setNotify] = useState(false);
  // All Dropdowns
  const [roles, setRoles] = useState(null);
  const [ourPacks, setOurPacks] = useState(false);
  const [enableDown, setEnableDown] = useState(false);

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
  const [report, setReport] = useState(false);
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [dashCat, setDashCat] = useState(false);
  const [customerDown, setCustomerDown] = useState(false);
  const [adminRequest, setAdminRequst] = useState(false);
  const [siteManagement, setSiteManagement] = useState(false);
  const [production, setProduction] = useState(false);
  const [manageOrder, setManageOrder] = useState(false);
  const [dispatchers, setDispatchers] = useState(false);
  const [driverDetails, setDriverDetails] = useState(false);

  const [support, setSupport] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [btn, setBtn] = useState(false);
  const [activeTabs, setActiveTabs] = useState(0);
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

  const submitLogout = () => {
    navigate("/");
  }

  const toggle_nav = () => {
    setSaidBarShow(!saideBarShow);
  };

  const toggleLogoutPopup = () => {
    setLogoutPopupShow(!logoutPopupShow);
  };

  const camp_drop = () => {
    setRoles(!roles);
  }

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
              <h2 className="f8 text fs-sm-10 fs-md-10 fs-lg-11 fs-xl-15 fs-xxl-18 white mb-0">Restaurant</h2>
            </span>
          </div>
        </div>

      </header>
      <div className="menu_bar overflow-x-hidden overflow-scroll">
        <div className="menu">
          <ul className="menu_links ps-0">
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/dash-board1");
                setActiveTabs(23);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "dash-board1"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Dashboard
                </span>
                {/* <span className=" nav_dot" /> */}
              </h4>
            </li>
            <li
              className="nav_link trans mb-0"
              onClick={() => {
                navigate("/campaign-sms");
                setActiveTabs(0);
                setProdManagement(null);
                setCustomerDash(null);
                if (roles == null) {
                  setRoles(0);
                } else {
                  setRoles(null);
                }
              }}
            >
              <h4
                className={` ${splitLocation[1] === "campaign-sms"
                  || splitLocation[1] === "reccurring-sms"
                  || splitLocation[1] === "add-reccurring-sms"
                  || splitLocation[1] === "add-one-time-sms"
                  ? " active_bar f3"
                  : "white f1 "
                  } trans  f1 fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              //  onClick={camp_drop}
              >
                <img src={campaign} className="icon " alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Campaign
                </span>
                <KeyboardArrowDownRoundedIcon />

              </h4>
            </li>
            {roles !== null && (
              <div className=" nav-dropdown">
                <li
                  className="nav_link text-center trans sidebar-drop"
                  onClick={() => {
                    navigate("/campaign-sms");
                    setRoles(1)
                  }}
                >
                  <p
                    className={` ${activeTabs == 0 && roles == 1 ||
                      splitLocation[1] === "campaign-sms"
                      ? " active_bar_drop f2"
                      : "white f1 "
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>One Time SMS/Email
                  </p>
                </li>

                <li
                  className="nav_link text-center trans sidebar-drop"
                  onClick={() => {
                    navigate("/reccurring-sms");
                    setRoles(2)
                  }}
                >
                  <p
                    className={` ${activeTabs == 0 && roles == 2 ||
                      splitLocation[1] === "reccurring-sms"
                      ? "active_bar_drop f2"
                      : "white f1"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>Recurring SMS/Email
                  </p>
                </li>

              </div>
            )}
            <li
              className="nav_link trans"
              onClick={() => {
                navigate("/admin");
                setActiveTabs(1);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "admin" ||
                  splitLocation[1] === "add-admin"
                  ? " f3 active_bar"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                <img src={admin} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Admin
                </span>
                {/* <span className=" nav_dot" /> */}
              </h4>
            </li>
            <li
              className="nav_link trans"
              onClick={() => {
                navigate("/roles");
                setActiveTabs(2);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "roles" ||
                  splitLocation[1] === "add-roles"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                <img src={role} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  {" "}
                  Roles
                </span>
                {/* <span className=" nav_dot" /> */}
              </h4>
            </li>
            <li
              className="nav_link trans"
              onClick={() => {
                navigate("/department");
                setActiveTabs(3);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "department" ||
                  splitLocation[1] === "add-department"
                  ? " active_bar f3"
                  : "white f1"
                  } trans fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 `}
              >
                <img src={role} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Department
                </span>
                {/* <span className=" nav_dot" /> */}
              </h4>
            </li>
            {/* <li
              className="nav_link trans"
              onClick={() => {
                navigate("/task-cretation");
                setActiveTabs(4);
                setRoles(null);
                setCustomerDash(null);
                if (prodManagement == null) {
                  setProdManagement(0);
                } else {
                  setProdManagement(null);
                }
              }}
            >
              <h4
                className={` ${splitLocation[1] === "task-cretation" || splitLocation[1] === "task-todo-list"
                  || splitLocation[1] === "task-inprocess"
                  || splitLocation[1] === "task-inreview"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 mb-0 `}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1 ">
                  Task Creatation
                </span>
                <span className=" nav_dot" /> 
              </h4>
            </li>
            {prodManagement !== null && (
              <div className=" ">
                <li
                  className="nav_link text-center trans sidebar-drop ms-3"
                  onClick={() => {
                    navigate("/task-todo-list");
                    setProdManagement(1);
                  }}
                >
                  <p
                    className={` ${activeTabs == 4 && prodManagement == 1 ||
                      splitLocation[1] === "task-todo-list"
                      ? " active_task_drop f3"
                      : "white f1 task_drop"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>Todo List
                  </p>
                </li>
                <li
                  className="nav_link text-center trans sidebar-drop ms-3 "
                  onClick={() => {
                    navigate("/task-inprocess");
                    setProdManagement(2);
                  }}
                >
                  <p
                    className={` ${activeTabs == 4 && prodManagement == 2 ||
                      splitLocation[1] === "taskCretation" &&
                      splitLocation[1] === "task-inprocess"
                      ? "active_task_drop f3"
                      : "white f1 task_drop"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 mt-1`}>InProgress
                  </p>
                </li>
                <li
                  className="nav_link text-center trans sidebar-drop ms-3"
                  onClick={() => {
                    navigate("/task-inreview");
                    setProdManagement(3);
                  }}
                >
                  <p
                    className={` ${activeTabs == 4 && prodManagement == 3 ||
                      splitLocation[1] === "taskCretation" &&
                      splitLocation[1] === "task-inreview"
                      ? "active_task_drop  f3"
                      : "white f1 task_drop"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 mt-1`}>InReview
                  </p>
                </li>
              </div>
            )} */}
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/task-assign");
                setActiveTabs(5);
                setProdManagement(null);
                setRoles(null);
                if (customerDash == null) {
                  setCustomerDash(0);
                } else {
                  setCustomerDash(null);
                }
              }}
            >
              <h4
                className={` ${splitLocation[1] === "task-assign" ||
                  splitLocation[1] === "waiter-assign" ||
                  splitLocation[1] === "add-task-assign" ||
                  splitLocation[1] === "add-waiter-assign"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 mb-0`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Task Assign
                </span>
                {/* <span className=" nav_dot" /> */}
              </h4>
            </li>
            {customerDash !== null && (
              <div className="">
                <li
                  className="nav_link text-center trans sidebar-drop ms-3"
                  onClick={() => {
                    navigate("/task-assign");
                  }}
                >
                  <p
                    className={` ${activeTabs == 5 && customerDash == 1 ||
                      splitLocation[1] === "task-assign" ||
                      splitLocation[1] === "add-task-assign"
                      ? " active_task_drop f3"
                      : "white f1 task_drop"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 `}>Kitchen
                  </p>
                </li>

                <li
                  className="nav_link text-center trans sidebar-drop ms-3"
                  onClick={() => {
                    navigate("/waiter-assign");
                  }}
                >
                  <p
                    className={` ${activeTabs == 5 && customerDash == 2 ||
                      splitLocation[1] === "waiter-assign" ||
                      splitLocation[1] === "add-waiter-assign"
                      ? "active_task_drop f3"
                      : "white f1 task_drop"
                      } trans m-0 f2 fs-xs-8 fs-sm-9 fs-md-10 fs-lg-11 fs-xl-12 fs-xxl-13 mt-1`}>Waiter
                  </p>
                </li>
              </div>
            )}

            {/* <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/business-details");
                setActiveTabs(6);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "business-details" ||
                  splitLocation[1] === "view-business-details"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Business Details
                </span>
              </h4>
            </li>

            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/onboarding");
                setActiveTabs(7);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "onboarding" ||
                  splitLocation[1] === "add-onboarding"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Onboarding
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/go-cardless");
                setActiveTabs(8);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "go-cardless"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  GocardLess
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/manager");
                setActiveTabs(9);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "manager"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Manager/TL
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/loyalty");
                setActiveTabs(10);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "loyalty"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Loyalty
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/seo");
                setActiveTabs(11);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "seo"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Seo
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/delivery");
                setActiveTabs(12);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "delivery"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Delivery
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/orders");
                setActiveTabs(13);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "orders"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Orders
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/website");
                setActiveTabs(14);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "website"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Website
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/apps");
                setActiveTabs(15);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "apps"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Apps
                </span>
              </h4>
            </li> */}
            <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/printer-recipt");
                setActiveTabs(16);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "printer-recipt"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Printer(recipt)
                </span>
              </h4>
            </li>
            {/* <li
              className="nav_link trans trans"
              onClick={() => {
                navigate("/order-recipt");
                setActiveTabs(17);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "order-recipt"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Order recipt
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/order-screen");
                setActiveTabs(18);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "order-screen"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Order Screen
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/category");
                setActiveTabs(19);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "category"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Menu
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/category-config");
                setActiveTabs(20);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "category-config"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Dashboard
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/printer-profile");
                setActiveTabs(21);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "printer-profile"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Printer Profile
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/dispatchers");
                setActiveTabs(22);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "dispatchers"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Dispatchers
                </span>
              </h4>
            </li>
            <li
              className="nav_link trans trans "
              onClick={() => {
                navigate("/driver-details");
                setActiveTabs(23);
                setProdManagement(null);
                setRoles(null);
                setCustomerDash(null);
              }}
            >
              <h4
                className={` ${splitLocation[1] === "driver-details"
                  ? " active_bar f3"
                  : "white f1"
                  } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20`}
              >
                <img src={task} className="icon" alt="" />
                <span className="text text-nowrap f2 fs-xs-10 trans fs-sm-10 fs-md-11 fs-lg-12 fs-xl-13 fs-xxl-14 ps-1">
                  Driver Details
                </span>
              </h4>
            </li> */}


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
        <div className="nav_link trans trans" >
          <li className="nav_link trans">
            <p
              className={` ${splitLocation[1] === "logout"
                ? " active_bar f3"
                : "white f1"
                } trans  fs-xs-18 fs-sm-20 fs-md-16 fs-lg-18 fs-xl-19 fs-xxl-20 white `}
            >
              {" "}
              <button
                className="border-0 bg-transparent d-flex"
                onClick={() => setLogoutPopupShow(true)}
                disabled={btn ? true : false}
              >
                <LogoutIcon className="white icon" />

                <span className="white text text-nowrap f2 fs-xs-10 trans fs-sm-11 fs-md-12 fs-lg-13 fs-xl-14 fs-xxl-15 mt-1">
                  Logout
                </span>
              </button>
            </p>
          </li>
        </div>
      </div>
      {logoutPopupShow && (
        <div className='pop-up'>
          <div className='popup-des '>
            <p className="f3 mt-4 mb-2 f2 fs-xs-14 fs-sm-11 fs-md-13 fs-lg-15 fs-xl-17 fs-xxl-19 ">
              Are you sure you want to <LogoutIcon /> logout?
            </p>
            <div className="d-flex ac-jb px-2 mt-5">
              <button
                onClick={() => setLogoutPopupShow(false)}
                className="cancl-btn  f2 w-40"
              >
                No
              </button>
              <button onClick={() => submitLogout()} className="sync-btn f2 w-40">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileNavBar;
