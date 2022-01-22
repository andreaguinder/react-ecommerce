import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <div className="divCentrado justify-content-around">
            {productos.map((item,index)=>{
                return <Item key={index} product={item}/>
            })}
        </div>
    )
}

export default ItemList
