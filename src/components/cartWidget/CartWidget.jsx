import { IoCart } from "react-icons/io5";
import "../cartWidget/CartWidget.css"; // Asegúrate de que este archivo exista en la misma carpeta

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <IoCart className="cart-icon" />
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;
