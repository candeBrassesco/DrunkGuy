import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mockFecht } from "../../utils/mockFetch"
import { useParams } from "react-router-dom"
import LoadingComponent from "../LoadingComponent/LoadingComponent"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})

    const [isLoading, setIsLoading] = useState(true)

    const {pid} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', pid )
        getDoc(queryDoc)
        .then(resp => setProduct( { id: resp.id, ... resp.data() } ))
        .catch(err => console.log(err))
        .finally(()=>setIsLoading(false))
    },[pid])


    return (
        <>
        {
            isLoading ?
               <LoadingComponent />
            :
            <div className="itemDetailContainer">
               <ItemDetail product={product}/>
            </div>
        }
       </>
    )
}

export default ItemDetailContainer