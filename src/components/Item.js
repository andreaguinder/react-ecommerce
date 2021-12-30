
const Item = ({ item }) => {
    return (
        <div>
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} width={100}/>
            <p>Precio : ${item.precio}</p>
            <button><a href="ItemDetailContainer.js">Detalles del producto</a></button>
        </div>
    )
}

export default Item