function App() {
  let nombre = "Francisco";
  const saludar = () => {
    console.log("Hola, " + nombre);
  };
  return (
    <>
      <div>
        <h2>Mi primera App React</h2>
        <h4>Mi nombre es: {saludar}</h4>
        <button onClick={saludar}>Saludar</button>
      </div>
    </>
  );
}

export default App;
