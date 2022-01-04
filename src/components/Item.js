import ItemCount from "./ItemCount";

const Item = ({ item }) => {
    return (
        <div className="p-1">
        <div className="text-center cardItem mx-2 h-100">
            <h5>{item.nombre}</h5>
            <img src={item.img} alt={item.nombre} width={100}/>
            <p>${item.precio}</p>
            <p>Stock Disponible: {item.stock}</p>
            <button id="buttonVerMas"><a href="ItemDetailContainer.js">Ver más</a></button>
            <ItemCount stock={item.stock} initial={0}/>
        </div>
        </div>
    )
}

export default Item