import { Link } from "react-router-dom";
import "../../styles/header/header.css"; // Asegúrate de tener este archivo CSS

const Navbar = () => {
  return (
    <>
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
