import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./SideBar.css";

const SideBar = ({ onEditModal, onLogOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="side-bar">
      <div className="side-bar__image-column">
        <div className="side-bar__name-image">
          <img
            className="side-bar__image"
            src={currentUser?.avatar}
            alt="logo"
          />
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
