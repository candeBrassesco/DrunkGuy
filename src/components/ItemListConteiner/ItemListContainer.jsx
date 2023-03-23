import './ItemListContainer.css'

const ItemListContainer = ( {alertaEdad} ) =>{
    return (
       <div className="container__fluid itemList">
           <button onClick={alertaEdad}>Ver Listado</button>
       </div> 
    )
}

export default ItemListContainer