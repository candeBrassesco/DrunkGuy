import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mockFecht } from "../../utils/mockFetch"
import { useParams } from "react-router-dom"
import LoadingComponent from "../LoadingComponent/LoadingComponent"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})

    const [isLoading, setIsLoading] = useState(true)

    const {pid} = useParams()

    useEffect(() => {
        mockFecht(pid)
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(()=>setIsLoading(false))
    }, [])

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