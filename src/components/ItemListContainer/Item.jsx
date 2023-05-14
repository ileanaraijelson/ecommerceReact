import { Link } from "react-router-dom";



const Item = ({producto}) => {
    return(
        
            <div className="producto">
                <img src={producto.image} alt={producto.name}/>
                <div>
                <h4> {producto.name}</h4>
                <p>${producto.price}</p>
                <p>{producto.description}</p>
                <p>Categoría: {producto.category}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
                </div>
            </div>

    )
};

export default Item;

