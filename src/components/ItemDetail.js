import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail  = ({producto, onAdd, agregado}) => {
    return (
        <div>
            <h3>{producto.nombre}</h3>
            <img src={producto.img} alt={producto.nombre} width="50%"/>

            <p>Precio:{producto.precio}</p>
            <p>Detalle:{producto.detalle}</p>
            { agregado ? 
                        <button className="btn btn-secondary">
                            <Link to='/carrito'>Ir al carrito</Link>        
                        </button>
                        
                        : <ItemCount stock= {producto.stock} initial={1} onAdd={onAdd} />}
        </div>
    )
}

export default ItemDetail 