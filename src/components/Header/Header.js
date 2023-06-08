import "./Header.css";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="logo" />
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
          <img src={require("../../images/avatar.svg").default} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
