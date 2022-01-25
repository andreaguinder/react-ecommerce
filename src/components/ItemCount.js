import React, { useState } from "react"

const ItemCount = ( {stock, initial, onAdd}) => {

    const [ contador, setContador ] = useState(initial);

    const sumarProducto = () => {
        setContador(contador + 1)
    }
    const restarProducto = () => {
            setContador(contador - 1)
    }

    return (

    <div className="divCentrado">
        <button type="button" className="btn btn-secondary px-3 mx-3 my-3" onClick={() => restarProducto()} disabled={contador === initial}> - </button>
        <p className="linksEstilo">{contador}</p>
        <button type="button" className="btn btn-secondary px-3 mx-3 my-3" onClick={() => sumarProducto()} disabled={contador >= stock}> + </button>
        <button type="button" className="btn btn-secondary p-2" onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>

    )
}

export default ItemCount;