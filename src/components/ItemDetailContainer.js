import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"


const detalle= [{id: 1, stock: 5, nombre: "Cuadro 1", precio: 5000, img: "/public/img/pruebaimg.jpg", detalle: "Imitación cuadro de Dalí en Canvas de 80 x 60 cm"}]


const ItemDetailContainer = () => {
    const [item, setProducto]= useState ([])

    useEffect(() => {
        const promesa = new Promise((res) => {
            setTimeout(() => {
                res(detalle)
            }, 2000)
        })

        promesa
            .then((item) => {
                console.log("Funciona")
                setProducto(item)
            })
            .catch(() => {
                console.log("No funciona")
            })

    }, )


    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer