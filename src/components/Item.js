const Item = ({ item }) => {
    return (
        <div className="p-1">
        <div className="text-center cardItem mx-2 h-100">
            <h5>{item.nombre}</h5>
            <img src={item.img} alt={item.nombre} width={100}/>
            <p>${item.precio}</p>
            <button id="buttonVerMas"><a href="ItemDetailContainer.js">Ver más</a></button>
        </div>
        </div>
    )
}

export default Item