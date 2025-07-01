import Navbar from "../layout/Navbar";
import SocialIcons from "../components/SocialIcons";
import logo from "../assets/react.svg"; // tu logo
import "../styles/header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <Navbar />
        <SocialIcons />
      </div>
    </header>
  );
};

export default Header;
