import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import addButton from "../../images/Addclothes.svg";

const Header = ({ onCreateModal }) => {
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
            className="header__add-clothes-button"
          >
            <img src={addButton} alt="Add Button" />
            {/* {addButton} */}
          </button>
        </div>
        <Link to="/profile"> Ahmed Awad</Link>
        <div>
          <img src={avatar} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
