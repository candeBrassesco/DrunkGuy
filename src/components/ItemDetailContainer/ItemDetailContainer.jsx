import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mockFecht } from "../../utils/mockFetch"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})

    useEffect(() => {
        mockFecht('1')
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