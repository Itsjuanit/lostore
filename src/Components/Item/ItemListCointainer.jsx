import { ItemListCointainerDiv } from "./ItemListContainer.elements";
import { useEffect, useState } from "react";
import misItems from "../../data/items.json";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemListContainer = ({}) => {
  const category = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        if (category.hasOwnProperty("id")) {
          setItems(json.filter((el) => el.category == category.id));
        } else {
          setItems(json);
        }
      });
  }, [category]);

  return (
    <ItemListCointainerDiv>
      <ItemList arrayDeItems={items}>
        <ItemDetailContainer />
      </ItemList>
    </ItemListCointainerDiv>
  );
};

export default ItemListContainer;
