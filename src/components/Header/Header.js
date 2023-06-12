import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            Add New Clothes
          </button>
        </div>
        <div>Name</div>
        <div>
          {/* src={require(".../src/images/avatar.svg").default} */}
          <img src={avatar} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
