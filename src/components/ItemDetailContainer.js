
import {React, useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext";


let productos= [
    {id: 1, stock: 5, nombre: "Cuadro Dalí", precio: 5000, img: "/img/pruebaimg.jpg", categoria: "Cuadros", detalle: "Cuadro imitación Dalí realizado en Canvas de pared de 60 cm x 80 cm."},
    {id: 2, stock: 4, nombre: "Anotadores s/e", precio: 500, img: "/img/anotadores.jpg", categoria: "Papelería", detalle: "Anotadores sin elección de motivo, diseño zen, de 10 cm x 15 cm x 80 hojas lisas anillado superior"},
    {id: 3, stock: 8, nombre: "Galatea de las Esferas", precio: 5000, img: "/img/tmp1091343711360516099.jpg", categoria: "Cuadros", detalle: "Cuadro imitación Dalí realizado en Canvas de pared de 70 cm x 50 cm."},
    {id: 4, stock: 10, nombre: "Velas Strawberry", precio: 400, img: "/img/Velas mockup con trama.png", categoria: "Velas y Aromatizantes", detalle: "Velas aromáticas x 2 de aroma Strawberry, ideal para aromatizar tu espacio zen; en frasco plástico tamaño chico."},
    {id: 5, stock: 2, nombre: "Cuadro Naturaleza", precio: 800, img: "/img/fondo 2.jpg", categoria: "Cuadros", detalle: "Cuadro inspirado en la Naturaleza pero con una simbología de ambigüedad en sus colores siendo magenta y cyan, de 50 cm x 65 cm."},
    {id: 6, stock: 10, nombre: "Difusores x 3", precio: 1500, img: "/img/difusoresportres.jpg", categoria: "Velas y Aromatizantes", detalle:"Difusores con palitos de bamboo, aroma Vainilla, Strawberry y Naranja de 50ml cada uno."},
    {id: 7, stock: 5, nombre: "Agendas 3 días por hoja", precio: 1000, img: "/img/agendas 2.jpg", categoria: "Papelería", detalle:"Agendas Zen con 3 días en cada hoja + Sábados y Domingos Juntos, hojas de Contactos al principio, hojas de Notas al final y 2 planchas de stickers de regalo."},
    {id: 8, stock: 3, nombre: "Naturaleza Romántica", precio: 5000, img: "/img/81dfcfde8e103227c8e4cee88f9ffadc.jpg", categoria: "Cuadros", detalle:"Cuadro de 50 cm. x 65 cm; ideal para darle un toque natural pero romántico a cualquier ambiente."},
    {id: 9, stock: 2, nombre: "Difusores x 5", precio: 2000, img: "/img/difusores.jpg", categoria: "Velas y Aromatizantes", detalle:"Difusores con palitos de bamboo, aroma Vainilla, Strawberry, Naranja, Chocolate y Melón de 50ml cada uno."},
    {id: 10, stock: 3, nombre: "Cuadros Naturaleza x 3", precio: 12000, img: "/img/365ab63e9f8810bb416eb0b95e63bc85.jpg", categoria: "Cuadros", detalle:"Cuadros inspirados en la naturaleza de 50cm x 65cm que se colocan indivodualmente pero se perciben como un todo."},
    {id: 11, stock: 10, nombre: "Cuadro Tríptico Patrón Mandala", precio: 20000, img: "/img/29554.jpg", categoria: "Cuadros", detalle:"3 cuadros creados con un patrón de Mandala; de efecto misterioso, armonizarán cualquier ambiente y lo cargarán de energía positiva; ideal repartir turmalinas negras en el espacio para que absorban y se lleven la energía negativa del lugar y las personas."},
    {id: 12, stock: 12, nombre: "Agendas día por hoja", precio: 2500, img: "/img/agendas.jpg", categoria: "Papelería", detalle:"Agendas Zen con día por hoja inclusive Sábados y Domingos, para que puedas llevar una mejor organización de tus tiempos; hojas de Contactos al principio, hojas de Notas al final y 3 planchas de stickers de regalo."},
    {id: 13, stock: 3, nombre: "Cuadro x 2 Sol Patrón Mandala", precio: 12000, img: "/img/61p9aQVM4lL._AC_SX466_.jpg", categoria: "Cuadros", detalle:"2 cuadros de 70 cm x 60 cm. inspirados en el patrón Mandala y en el sol, iluminarán cualquier ambiente y atraerán energía positiva, ideal juntarlos con piedras de la luna repartidas en el espacio."},
    {id: 14, stock: 5, nombre: "Esencias para hornitos x 20", precio: 4500, img: "/img/aromatizantes-hornitos.jpg", categoria: "Velas y Aromatizantes", detalle:""},
    {id: 15, stock: 6, nombre: "Mandala estilo Rústico", precio: 3000, img: "/img/mandalaegipcio.png", categoria: "Cuadros", detalle:""},
    {id: 16, stock: 2, nombre: "Hornito Rosa con 2 velas y 1 esencia", precio: 2000, img: "/img/aromatiz-convela.jpg", categoria: "Velas y Aromatizantes", detalle:""},
    {id: 17, stock: 2, nombre: "Hornito Rústico con 2 velas y 3 esencias", precio: 4000, img: "/img/hornitorustico-diezvelas.jpg", categoria: "Velas y Aromatizantes", detalle:""},
    {id: 18, stock: 3, nombre: "Hornito blanco con 10 velas y 2 esencias", precio: 6000, img: "/img/hornito-diezvelas-unaesencia.jpeg", categoria: "Velas y Aromatizantes", detalle:""},
    {id: 19, stock: 5, nombre: "Hornitos x 3 con 3 esencias y 3 velas", precio: 10000, img: "/img/hornitosportres-velas.jpg", categoria: "Velas y Aromatizantes", detalle:""},
    {id: 20, stock: 20, nombre: "Esencias para Hornito x 3", precio: 1500, img: "/img/IMG_GR_productos1576609973.jpg", categoria: "Velas y Aromatizantes", detalle:""},
    {id: 21, stock: 5, nombre: "Agendas Motivadoras", precio: 2000, img: "/img/agendas 3.jpg", categoria: "Papelería", detalle:""},
    {id: 22, stock: 6, nombre: "Anotadores Ecológicos Cocina", precio: 800, img: "/img/anotadores eco de cocina.jpg", categoria: "Papelería", detalle:""},
    {id: 23, stock: 6, nombre: "Anotadores Eco con lapicéra", precio: 1000, img: "/img/anotadores eco.webp", categoria: "Papelería", detalle:""},
    {id: 24, stock: 5, nombre: "Cuadros x 2 Mandala", precio: 10000, img: "/img/mandalaendos.jpg", categoria: "Cuadros", detalle:""},
    {id: 25, stock: 7, nombre: "Cuadro Calado en 3", precio: 12000, img: "/img/caladoentres.jpg", categoria: "Cuadros", detalle:""},
    {id: 26, stock: 10, nombre: "Velas de Soja Aromatizantes en f/vidrio x 2", precio: 1200, img: "/img/velassojaaroma.jpg", categoria: "Velas y Aromatizantes", detalle: "Velas aromáticas x 2 de aroma a elección, ideal para aromatizar tu espacio zen; en frasco vidrio tamaño grande."}
]

const ItemDetailContainer = () => {
    const [added, setAdded] = useState(false);
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    const { addtoCart } = useContext(CartContext);

    useEffect(() => {

     if(id){
        const general = productos.find(e => e.id === parseInt(id))
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(general)
            }, 1000)
        })
        promesa
            .then((producto) => {
                setProducto(producto)
            })
    }
    

}, [id])

const onAdd = (count) => {
    addtoCart(producto, count);
    setAdded(true); 
  }


    return (
        <div className="divCentrado">
            <ItemDetail onAdd={onAdd} producto={producto} added={added}/>
        </div>
    )
}

export default ItemDetailContainer;




