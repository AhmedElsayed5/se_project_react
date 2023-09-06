import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";
import editProfile from "../../images/Change-profile-data.svg";
import logOut from "../../images/Log-out.svg";

const SideBar = ({ onEditModal, onLogOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="side-bar">
      <div className="side-bar__image-column">
        <div className="side-bar__name-image">
          <img className="side-bar__image" src={avatar} alt="logo" />
          <div className="side-bar__title">{currentUser?.name}</div>
        </div>
        <div className="side-bar__edit-profile-button">
          <button
            type="text"
            onClick={onEditModal}
            className="side-bar__edit-profile-button side-bar__button-text"
          >
            Change profile data
          </button>
          <button
            type="text"
            onClick={onLogOut}
            className="side-bar__edit-profile-button side-bar__button-text"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
