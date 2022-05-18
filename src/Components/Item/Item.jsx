import {
  ListBox,
  ListBoxImg,
  ListBoxTitle,
  ListBoxPrice,
} from "./Item.elements";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={`/category/${item.category}`}>
      <ListBox>
        <ListBoxImg src={item.image} alt="Imagen" />
        <ListBoxTitle>{item.title}</ListBoxTitle>
        <ListBoxPrice>${item.price}</ListBoxPrice>
      </ListBox>
    </Link>
  );
};

export default Item;
