import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ( {alertaEdad} ) =>{
    return (
       <div className="container__fluid itemList">
           <button className="verLista" onClick={alertaEdad}>Ver Listado</button>
           < ItemCount inicio={1} stock={7} onAdd={(cantidad) => alert('Cantidad agregada al carrito: ', cantidad)}/>
       </div> 
    )
}

export default ItemListContainer