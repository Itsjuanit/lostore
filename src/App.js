import NavBar from "./Components/NavBar/NavBar";
import ItemListCointainer from "./Components/Item/ItemListCointainer";
import ItemDetailContainer from "./Components/Item/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListCointainer greeting="BIENVENIDOS A NUESTRA TIENDA" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
