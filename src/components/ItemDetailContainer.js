import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"


const productosTienda= {id: 1, stock: 5, nombre: "Cuadro 1", precio: 5000, img: "/img/1974.46_sueno-causado-vuelo-abeja-alrededor-granada-segundo-antes-despertar.jpg", detalle: "Imitación cuadro de Dalí en Canvas de 80 x 60 cm"}


const ItemDetailContainer = () => {
    const [producto, setProducto]= useState ()

    useEffect(() => {
        const promesa = new Promise((res) => {
            setTimeout(() => {
                res(productosTienda)
            }, 2000)
        })

        promesa
            .then((producto) => {
                console.log("Funciona")
                setProducto(producto)
            })
            .catch(() => {
                console.log("No funciona")
            })

    }, )


    return (
        <div>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer