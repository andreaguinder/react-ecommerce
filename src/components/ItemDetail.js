import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail  = ({producto, onAdd, agregado}) => {
    return (
        <div className="divCentrado">
            <h3>{producto.nombre}</h3>
            <span className="text-center"><img src={producto.img} alt={producto.nombre} width="50%"/></span>
            <div>
            <span className="text-center"><p>Precio: ${producto.precio} </p></span>
            <span className="text-center"><p>{producto.detalle}</p></span></div>
            <div className="text-center divCentrado">{ agregado ? 
                        <button className="btn btn-secondary">
                            <Link to='/carrito'>Ir al carrito</Link>        
                        </button>
                        
                        : <ItemCount stock= {producto.stock} initial={1} onAdd={onAdd} />}</div> 
                        <Link className='btn btn-secondary' to={`/`}>Volver a Inicio</Link>
        </div>
    )
}

export default ItemDetail 