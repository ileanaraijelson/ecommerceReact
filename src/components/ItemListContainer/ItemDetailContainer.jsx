import React, { useEffect, useState } from "react";
import { First } from "react-bootstrap/esm/PageItem";
import { pedirItem } from "./pedirProductos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;
    console.log(id);

    useEffect(() =>{
        pedirItem(Number(id))
        .then((res)=> {
            setItem(res);
        })
    }, [id])

    return(
        <div>
          {item &&  <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer 