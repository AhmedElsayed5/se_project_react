import React from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div>
        <img src={avatar} alt="logo" />
      </div>
      <div className="side-bar__title">Ahmed Awad</div>
    </div>
  );
};
export default SideBar;
