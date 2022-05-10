import Item from "./Item";
import { ListBoxPosition } from "./ItemList.elements";
const ItemList = ({ arrayDeItems }) => {
  return (
    <ListBoxPosition>
      {arrayDeItems.map((v) => (
        <Item key={v.id} item={v} />
      ))}
    </ListBoxPosition>
  );
};

export default ItemList;
