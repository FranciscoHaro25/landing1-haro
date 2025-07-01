import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import "../styles/header.css";

const Navbar = () => {
  return (
    <>
      <h2>Mi primera app</h2>
      <IoCart />

      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/carrito">Carrito</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
