import ItemListContainer from "./ItemListContainer"

const Main = (productos) => {
    return (
        <main className="mt-3">
            <ItemListContainer productos={productos} />
        </main>
    )
}

export default Main
