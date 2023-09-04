import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";
import editProfile from "../../images/Change-profile-data.svg";

const SideBar = ({ onEditModal }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="side-bar">
      <div className="side-bar__image-column">
        <div className="side-bar__name-image">
          <img className="side-bar__image" src={avatar} alt="logo" />
          <div className="side-bar__title">{currentUser?.name}</div>
        </div>
        <button
          type="text"
          // onClick={onCreateModal}
          // className={
          //   currentUser === {}
          //     ? "header__sign-up-button"
          //     : "header__sign-up-button__invisible"
          // }
          onClick={onEditModal}
          className="side-bar__edit-profile-button"
        >
          {/* <p className="side-bar__edit-profile">Change profile data</p> */}
          <img src={editProfile} alt="edit profile" />
        </button>
      </div>
    </div>
  );
};
export default SideBar;
