import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="To-Do Logo" />
        <span>To-Do List</span>
      </div>
    </header>
  );
};

export default Header;
