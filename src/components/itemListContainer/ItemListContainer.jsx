import "../itemListContainer/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const items = ["Producto A", "Producto B", "Producto C"];

  const handleClick = (item) => {
    alert(`Seleccionaste: ${item}`);
  };

  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemListContainer;
