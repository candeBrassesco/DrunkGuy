import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ( { productos } ) => {
    return (
        <div className="listGroup">
            {productos.map(prod => <Item key={prod.id} />)}
        </div>
    )
}

export default ItemList