import { useState } from "react";
import { CardCounter, CardCounterInput } from "./ItemCounter.elements";
import { FaPlus, FaMinus } from "react-icons/fa";

const ItemCounter = (props) => {
  const [count, setCount] = useState(parseInt(props.initial));

  const onAdd = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };
  const onSubtraction = () => {
    if (count > props.initial) {
      setCount(count - 1);
    }
  };

  return (
    <CardCounter>
      <h2>Tengo {count} iPads en mi carrito</h2>
      <CardCounterInput>
        <FaMinus onClick={onSubtraction} />
        <input
          type="text"
          value={count}
          readOnly
          style={{ textAlign: "center" }}
        />
        <FaPlus onClick={onAdd} />
      </CardCounterInput>
    </CardCounter>
  );
};

export default ItemCounter;
