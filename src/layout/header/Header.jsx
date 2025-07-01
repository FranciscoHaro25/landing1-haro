import Navbar from "../../layout/header/Navbar";
// import SocialIcons from "../../components/SocialIcons";
import logo from "../../assets/react.svg";
import "../../styles/header/header.css";
import CartWidget from "../../components/CartWidget";
import CustomButton from "../../components/customButton/CustomButton";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <Navbar />
        <CustomButton
          text="Guardar Cambios"
          onClick={() => alert("Bienvenido Ecomerce")}
        />
        {/* <SocialIcons /> */}
        <CartWidget />
      </div>
    </header>
  );
};

export default Header;
