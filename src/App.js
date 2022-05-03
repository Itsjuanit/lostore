import NavBar from "./Components/NavBar/NavBar";
import ItemListCointainer from "./Components/Item/ItemListCointainer";
import ItemCounter from "./Components/Counter/ItemCounter";

function App() {
  return (
    <>
      <NavBar />
      <ItemListCointainer greeting="BIENVENIDOS A NUESTRA TIENDA" />
      <ItemCounter />
    </>
  );
}

export default App;
