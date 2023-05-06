import { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { mockFecht } from '../../utils/mockFetch'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import LoadingComponent from '../LoadingComponent/LoadingComponent'


const ItemListContainer = () =>{
    const [productos, setProductos] = useState ([])

    const [isLoading, setIsLoading] = useState(true)

    const {pca} = useParams()

    useEffect(() => {
        
        if (pca) {
            mockFecht()
            .then(resp => {setProductos(resp.filter(prod => prod.categoria == pca))})
            .catch(err => {console.log(err)})
            .finally(()=> setIsLoading(false)) 
        } else {
            mockFecht()
            .then(resp => {setProductos(resp)})
            .catch(err => {console.log(err)})
            .finally(()=> setIsLoading(false)) 
        }

    },[pca])

    console.log(productos)

    return (
        <>
        {
        isLoading ? 
           <LoadingComponent />
        :   
        <div className="container__fluid itemList">
           < ItemList productos={productos} />
        </div> 
        } 
      </>
    )
}

export default ItemListContainer