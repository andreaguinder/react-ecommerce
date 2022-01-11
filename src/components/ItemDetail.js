import ItemCount from "./ItemCount";

const ItemDetail  = ({producto}) => {
    return (
        <div>
            <h3>Detalle del producto</h3>
            <img src={producto.img} alt={producto.nombre}/>
            <p>Nombre:{producto.nombre}</p>
            <p>Precio:{producto.precio}</p>
            <p>Detalle:{producto.detalle}</p>

            <ItemCount stock= {producto.stock} initial={0}/>

        </div>
    )
}

export default ItemDetail 