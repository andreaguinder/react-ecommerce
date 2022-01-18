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
        <p>Cantidad Actual: {contador}</p>
        <button type="button" className="btn btn-secondary" onClick={() => restarProducto()} disabled={contador === initial}>-</button>
        <button type="button" className="btn btn-secondary" onClick={() => sumarProducto()} disabled={contador >= stock}>+</button>
        <button type="button" className="btn btn-secondary" onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount