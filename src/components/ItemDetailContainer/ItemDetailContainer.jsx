import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mockFecht } from "../../utils/mockFetch"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})

    const {pid} = useParams()

    useEffect(() => {
        mockFecht(pid)
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
    }, [])

    return (
    <div className="itemDetailContainer">
        <ItemDetail product={product}/>
    </div>
    )
}

export default ItemDetailContainer