import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({ onCreateModal, onLogInModal, isLoggedIn, onLogOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          {isLoggedIn ? (
            <div className="header__user-buttons">
              {/* <button type="text" onClick={onLogOut} className="header__button">
                Logout
              </button> */}
              <p className="header__current-user">{currentUser?.name}</p>
            </div>
          ) : (
            <div className="header__user-buttons">
              <button
                type="text"
                onClick={onLogInModal}
                className="header__button"
              >
                Log In
              </button>
              <button
                type="text"
                onClick={onCreateModal}
                className="header__button"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
        <div>
          <img src={avatar} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
