import { useEffect, useState } from "react"
import { mockFecht } from "../../utils/mockFetch"


const Contenedor = () => {
    const [productos, setProductos] = useState ([])

    useEffect(() => {
        mockFecht()
           .then(resp => setProductos(resp))
           .catch(err => console.log(err))
    },[])

    console.log(productos)

    return (
        <div></div>
    )
}

export default Contenedor