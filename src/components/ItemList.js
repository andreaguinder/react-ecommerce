import Item from "./Item"

const ItemList = ({lista}) => {
    return (
        <div className="divCentrado justify-content-around">
            {lista.map((item,index)=>{
                return <Item key={index} product={item}/>
            })}
        </div>
    )
}

export default ItemList;
