import { useState } from "react";
import {
  CardCounter,
  CardCounterBtn,
  CardCounterInput,
} from "./ItemCounter.elements";
import { FaPlus, FaMinus } from "react-icons/fa";

function ItemCounter() {
  const [count, setCount] = useState(0);
  return (
    <CardCounter>
      <h2>Tengo {count} iPads en mi carrito</h2>
      <CardCounterInput>
        <FaMinus onClick={() => setCount(count - 1)}/>
        <FaPlus onClick={() => setCount(count + 1)} />
      </CardCounterInput>
      <CardCounterBtn>Agregar al carrito</CardCounterBtn>
    </CardCounter>
  );
}

export default ItemCounter;
