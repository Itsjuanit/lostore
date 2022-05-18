import NavBar from "./Components/NavBar/NavBar";
import ItemListCointainer from "./Components/Item/ItemListCointainer";
import ItemDetailContainer from "./Components/Item/ItemDetailContainer";

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListCointainer />} />
          <Route path="/category/:id" element={<ItemListCointainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
