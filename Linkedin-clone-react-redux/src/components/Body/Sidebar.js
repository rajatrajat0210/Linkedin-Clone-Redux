import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Sidebar = () => {
  const user = useSelector((state) => state.user.user);

  const recentItems = (topic) => (
    <div className="recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" />
        <Avatar src={user.photoUrl} className="sidebar-avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName} </h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="stat-number">100</p>
        </div>
        <div className="sidebar-stat">
          <p>Connections</p>
          <p className="stat-number">500+</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("JavaScript")}
        {recentItems("developmenty")}
        {recentItems("softwareengineering")}
      </div>
    </div>
  );
};

export default Sidebar;
