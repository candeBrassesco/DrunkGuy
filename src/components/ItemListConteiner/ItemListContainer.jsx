import { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { mockFecht } from '../../utils/mockFetch'
import './ItemListContainer.css'


const ItemListContainer = () =>{
    const [productos, setProductos] = useState ([])

    useEffect(() => {
        mockFecht()
           .then(resp => {setProductos(resp)})
           .catch(err => {console.log(err)})
    },[])

    console.log(productos)

    return (
       <div className="container__fluid itemList">
           < ItemList productos={productos} />
           < ItemCount inicio={1} stock={7} onAdd={(cantidad) => alert('Cantidad agregada al carrito: ', cantidad)}/>
       </div> 
    )
}

export default ItemListContainer