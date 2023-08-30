import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import addButton from "../../images/Addclothes.svg";
import signUp from "../../images/Sign-Up.svg";
import logIn from "../../images/Log-In.svg";
import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({ onCreateModal, onLogInModal }) => {
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
          <button
            type="text"
            onClick={onCreateModal}
            // className={
            //   currentUser === {}
            //     ? "header__sign-up-button"
            //     : "header__sign-up-button__invisible"
            // }
            className="header__sign-up-button"
          >
            <img src={signUp} alt="sign-up" />
          </button>
          <button
            type="text"
            onClick={onLogInModal}
            // className={
            //   currentUser === {}
            //     ? "header__log-in-button"
            //     : "header__log-in-button__invisible"
            // }
            className="header__log-in-button"
          >
            <img src={logIn} alt="log-in" />
          </button>
        </div>
        <div>
          <img src={avatar} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
