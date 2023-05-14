import { useEffect, useState } from "react";
import "./Itemlistcontainer.css"
import ItemList from "./ItemList";
import pedirProductos from "./pedirProductos";
import { useParams } from "react-router-dom";


export const ItemListContainer =( )=>{

   const [productos, setProductos] = useState([]);
   const[titulo, setTitulo] = useState("productos")
   const category = useParams().category;
    

   
   
useEffect(() => {
    pedirProductos()
    .then((res) => {
        if(category){
            setProductos( res.filter((prod) => prod.category === category) );
            setTitulo(category);
        }else {
            setProductos(res);
            setTitulo("productos");
        }
})
}, [category])





    return (
        <div>
        <ItemList productos={productos} titulo={titulo}/>
        </div>
    )
};

export default ItemListContainer;