import "../navbar/Navbar.css";
import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h1>Mi Tienda</h1>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
        <div className="cart-container">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
