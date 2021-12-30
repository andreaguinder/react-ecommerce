import ItemListContainer from "./ItemListContainer"

const Main = (lista) => {
    return (
        <main id="contenedor_productos" className="mt-3">
            <ItemListContainer lista={lista} />
        </main>
    )
}

export default Main
