import Item from "./Item";
import { toCapital } from "./toCapital";

const ItemList =( {productos, titulo} ) => {
    return(
        <div className="container">
                <h2 className="main-title">{toCapital(titulo)}</h2>
                <div className="productos">
            {

                productos.length> 0 && 
                
                productos.map((producto) => {
                    return (
                        <Item key = { producto.id} producto = {producto}/>

                    )
                })
                
            }</div>
        </div>
    )
};

export default ItemList;