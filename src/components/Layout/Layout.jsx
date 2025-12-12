import { Outlet } from "react-router-dom";
import ProfileNavbar from "../ProfileNavbar";
import TopBar from "../TopBar/TopBar";

const Layout = () => {
  return (
    <div className="">
      <TopBar />
      <div className="dashboard">
        <ProfileNavbar />
        <Outlet />
      </div>
    </div>

  );
};

export default Layout;
