import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a mi tienda!" />
      <main>{/* contenido aquí */}</main>
      <Footer />
    </>
  );
}

export default App;
