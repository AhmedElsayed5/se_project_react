import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  onCreateModal,
  onLogInModal,
  isLoggedIn,
  onLogOut,
  onCreateItemModal,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  let date = new Date().toUTCString();
  let day = date.slice(5, 7);
  let month = date.slice(8, 11);
  let year = date.slice(12, 16);
  console.log(date);
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <p className="header__date">
            {month}
            {" " + day}
            ,Houston
          </p>
        </div>
      </div>

      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          {isLoggedIn ? (
            <div className="header__user-buttons">
              <button
                type="text"
                onClick={onCreateItemModal}
                className="header__button"
              >
                + Add clothes
              </button>
              <Link to="/profile" className="header__current-user-link">
                <p className="header__current-user">{currentUser?.name}</p>
              </Link>
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
