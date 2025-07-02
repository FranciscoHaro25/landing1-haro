import { useState } from "react";
import "../itemListContainer/ItemListContainer.css";

// src/data/products.js
import zapato from "../../assets/imagenes/zapato.jpg";
import camisa from "../../assets/imagenes/camisa.jpg";
import pantalon from "../../assets/imagenes/pantalon.jpg";
import gorra from "../../assets/imagenes/gorra.jpg";
import reloj from "../../assets/imagenes/reloj.jpg";
import mochila from "../../assets/imagenes/mochila.jpg";

import laptop from "../../assets/imagenes/laptop.jpg";
// import tablet from "../assets/products/tablet.jpg";
// import monitor from "../assets/products/monitor.jpg";
// import teclado from "../assets/products/teclado.jpg";
// import mouse from "../assets/products/mouse.jpg";
// import audifonos from "../assets/products/audifonos.jpg";

import silla from "../../assets/imagenes/silla-gamer.jpg";
// import escritorio from "../assets/products/escritorio.jpg";
// import lampara from "../assets/products/lampara.jpg";
// import cargador from "../assets/products/cargador.jpg";
// import base from "../assets/products/base.jpg";
// import altavoces from "../assets/products/altavoces.jpg";

const allProducts = {
  "Ropa y Accesorios": [
    { id: 1, name: "Zapato Clásico", price: "$25", image: zapato },
    { id: 2, name: "Camisa Azul", price: "$15", image: camisa },
    { id: 3, name: "Pantalón Jean", price: "$30", image: pantalon },
    { id: 4, name: "Gorra Negra", price: "$10", image: gorra },
    { id: 5, name: "Reloj Casual", price: "$50", image: reloj },
    { id: 6, name: "Mochila Urbana", price: "$35", image: mochila },
  ],
  Tecnología: [
    { id: 7, name: "Laptop Pro", price: "$850", image: laptop },
    // { id: 8, name: "Tablet", price: "$400", image: tablet },
    // { id: 9, name: "Monitor", price: "$250", image: monitor },
    // { id: 10, name: "Teclado", price: "$40", image: teclado },
    // { id: 11, name: "Mouse Gamer", price: "$35", image: mouse },
    // { id: 12, name: "Audífonos", price: "$60", image: audifonos },
  ],
  "Escritorio & Oficina": [
    { id: 13, name: "Silla Gamer", price: "$190", image: silla },
    // { id: 14, name: "Mesa Escritorio", price: "$140", image: escritorio },
    // { id: 15, name: "Lámpara LED", price: "$20", image: lampara },
    // { id: 16, name: "Cargador Inalámbrico", price: "$30", image: cargador },
    // { id: 17, name: "Base para Laptop", price: "$25", image: base },
    // { id: 18, name: "Altavoces Bluetooth", price: "$70", image: altavoces },
  ],
};

const ItemListContainer = ({ greeting }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>
      <ul className="item-buttons">
        {Object.keys(allProducts).map((category, i) => (
          <li key={i}>
            <button onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <div className="product-grid">
          {allProducts[selectedCategory].map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ItemListContainer;
