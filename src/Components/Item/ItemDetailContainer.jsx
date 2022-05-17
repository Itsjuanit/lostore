import { useEffect, useState } from "react";
import misItems from "../../data/items.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])


    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(misItems[0]);
        }, 2000)
    })


    useEffect(() => {
        getItem.then(res => setItems(res))             
        .catch(e => console.log(e));
    }, [])


    return(
        <ItemDetail item={items}/>
    )  
}

export default ItemDetailContainer;

