import { ItemListCointainerDiv } from "./ItemListContainer.elements";
import { useEffect, useState } from "react";
import misItems from "../../data/items.json";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);

  const pedidoItems = new Promise((resolve) => {
    setTimeout(() => {
      resolve(misItems);
    }, 2000);
  });

  useEffect(() => {
    pedidoItems
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ItemListCointainerDiv>
      <ItemList arrayDeItems={items} >
        <ItemDetailContainer />
      </ItemList>
    </ItemListCointainerDiv>
  );
};

export default ItemListContainer;
