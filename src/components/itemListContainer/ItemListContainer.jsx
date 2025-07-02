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

import silla from "../../assets/imagenes/silla-gamer.jpg";

const allProducts = {
  "Ropa y Accesorios": [
    { id: 1, name: "Zapato Clásico", price: "$25", image: zapato },
    { id: 2, name: "Camisa Azul", price: "$15", image: camisa },
    { id: 3, name: "Pantalón Jean", price: "$30", image: pantalon },
    { id: 4, name: "Gorra Negra", price: "$10", image: gorra },
    { id: 5, name: "Reloj Casual", price: "$50", image: reloj },
    { id: 6, name: "Mochila Urbana", price: "$35", image: mochila },
  ],
  Tecnología: [{ id: 7, name: "Laptop Pro", price: "$850", image: laptop }],
  "Escritorio & Oficina": [
    { id: 13, name: "Silla Gamer", price: "$190", image: silla },
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
