
const Item = ({ item }) => {
    return (
        <article>
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} width={100}/>
            <p>Precio : ${item.precio}</p>
        </article>
    )
}

export default Item