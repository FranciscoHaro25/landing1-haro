import { useState } from "react";
import "../itemListContainer/ItemListContainer.css";

const allProducts = {
  "Producto A": [
    {
      id: 1,
      name: "Zapato Clásico",
      price: "$25",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Camisa Azul",
      price: "$15",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Pantalón Jean",
      price: "$30",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Gorra Negra",
      price: "$10",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Reloj Casual",
      price: "$50",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Mochila Urbana",
      price: "$35",
      image: "https://via.placeholder.com/150",
    },
  ],
  "Producto B": [
    {
      id: 1,
      name: "Laptop Pro",
      price: "$850",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Tablet",
      price: "$400",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Monitor",
      price: "$250",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Teclado",
      price: "$40",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Mouse Gamer",
      price: "$35",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Audífonos",
      price: "$60",
      image: "https://via.placeholder.com/150",
    },
  ],
  "Producto C": [
    {
      id: 1,
      name: "Silla Gamer",
      price: "$190",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Mesa Escritorio",
      price: "$140",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Lámpara LED",
      price: "$20",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Cargador Inalámbrico",
      price: "$30",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Base para Laptop",
      price: "$25",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Altavoces Bluetooth",
      price: "$70",
      image: "https://via.placeholder.com/150",
    },
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
