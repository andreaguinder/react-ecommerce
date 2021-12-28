import React, { useState } from "react"

const Contador = ( {stock, initial, onAdd}) => {

    const [ Contador, setContador ] = useState(initial);

    const sumar = () => {
        setContador(Contador + 1)
    }
    const restar = () => {
            setContador(Contador - 1)
    }
    const confirmar = () => {
        console.log(`Confirmar cantidad: ${Contador}`)
        //onAdd(contador)
    }

    return (
    <div className="divCentrado">
        <p>Cantidad Actual: {Contador}</p>
        <button onClick={() => restar()} disabled={Contador === initial}>-</button>
        <button onClick={() => sumar()} disabled={Contador >= stock}>+</button>
        <button onClick={confirmar}>Confirmar</button>
        <button> Agregar al Carrito </button>
    </div>
    )
}

export default Contador