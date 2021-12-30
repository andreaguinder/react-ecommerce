import ItemCount from "./ItemCount";

const ItemDetail  = ({item}) => {
    return (
        <div>
            <h3>Detalle del producto</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>Nombre:{item.nombre}</p>
            <p>Precio:{item.precio}</p>
            <p>Detalle:{item.detalle}</p>

            <ItemCount stock= {item.stock} initial={0}/>
        </div>
    )
}

export default ItemDetail 