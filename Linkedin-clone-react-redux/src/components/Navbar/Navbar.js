import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NavOption from "./NavOption";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Slices/UserSlice";
import { auth } from "../../firebase";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <LinkedInIcon />

        <div className="nav-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="nav-right">
        <NavOption Icon={HomeIcon} title="Home" />
        <NavOption Icon={SupervisorAccountIcon} title="My Network" />
        <NavOption Icon={BusinessCenterIcon} title="Jobs" />
        <NavOption Icon={ChatIcon} title="Messaging" />
        <NavOption Icon={NotificationsIcon} title="Notification" />
        <NavOption
          avatar="/static/images/avatar/1.jpg"
          title="me"
          onClick={logoutOfApp}
        />
      </div>
    </nav>
  );
};

export default Navbar;
