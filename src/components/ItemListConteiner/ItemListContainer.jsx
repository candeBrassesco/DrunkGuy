import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = () =>{
    return (
       <div className="container__fluid itemList">
           < ItemCount inicio={1} stock={7} onAdd={(cantidad) => alert('Cantidad agregada al carrito: ', cantidad)}/>
       </div> 
    )
}

export default ItemListContainer