import { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { mockFecht } from '../../utils/mockFetch'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = () =>{
    const [productos, setProductos] = useState ([])
    const {ppr} = useParams()

    useEffect(() => {
        
        if (ppr) {
            mockFecht()
            .then(resp => {setProductos(resp.filter(prod => prod.precio == ppr))})
            .catch(err => {console.log(err)}) 
        } else {
            mockFecht()
            .then(resp => {setProductos(resp)})
            .catch(err => {console.log(err)})
        }

    },[ppr])

    console.log(productos)

    return (
       <div className="container__fluid itemList">
           < ItemList productos={productos} />
       </div> 
    )
}

export default ItemListContainer