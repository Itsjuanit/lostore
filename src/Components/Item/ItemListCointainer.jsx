import { ItemListCointainerH1 } from "./ItemListContainer.elements";
import ItemCounter from "../Counter/ItemCounter";

const ItemListCointainer = ({ greeting }) => {
  return (
    <ItemListCointainerH1>
      {greeting}
      <ItemCounter stock="15" initial="2" />
    </ItemListCointainerH1>
  );
};

export default ItemListCointainer;
