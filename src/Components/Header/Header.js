import "./Header.css";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src=".../src/images/logo.svg" alt="logo" />
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
          <img src=".../src/images/avatar.svg" alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
