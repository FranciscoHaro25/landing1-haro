import Navbar from "../../layout/header/Navbar";
import SocialIcons from "../../components/SocialIcons";
import logo from "../../assets/react.svg";
import "../../styles/header/header.css"; // Asegúrate de tener este archivo CSS

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <Navbar />
        <SocialIcons />
        {/* <CartWidget /> */}
      </div>
    </header>
  );
};

export default Header;
