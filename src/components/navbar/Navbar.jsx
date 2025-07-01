import "../navbar/Navbar.css";
import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <h1>Mi Tienda</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <div className="cart-container">
        <CartWidget />
        {/* <span>3</span> */}
      </div>
    </nav>
  );
};

export default Navbar;
