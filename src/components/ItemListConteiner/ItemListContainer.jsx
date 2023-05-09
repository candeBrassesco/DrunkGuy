import { useState, useEffect } from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { mockFecht } from '../../utils/mockFetch'
import { useParams } from 'react-router-dom'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import './ItemListContainer.css'


const ItemListContainer = () =>{
    const [productos, setProductos] = useState ([])

    const [isLoading, setIsLoading] = useState(true)

    const {pca} = useParams()


    useEffect(() => {
        const db = getFirestore()

        const queryCollection = collection(db, 'productos')

        if (pca) {
            const queryFilter = query(
                queryCollection, 
                where('categoria','==',pca))
    
            getDocs(queryFilter)
            .then(resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
            .catch(err => {console.log(err)})
            .finally(()=> setIsLoading(false)) 

        } else {
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
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