import {
  ListBox,
  ListBoxImg,
  ListBoxTitle,
  ListBoxPrice,
} from "./Item.elements";
const Item = ({ item }) => {
  return (
    <ListBox>
      <ListBoxImg src={item.img} alt="Imagen" />
      <ListBoxTitle>{item.title}</ListBoxTitle>
      <ListBoxPrice>${item.price}</ListBoxPrice>
    </ListBox>
  );
};

export default Item;
