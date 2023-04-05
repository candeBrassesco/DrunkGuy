import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, inicio, onAdd }) => {
    const [cantidad, setQuantity] = useState(inicio)

    const increment = () => {
        if (cantidad < stock) {
            setQuantity(cantidad + 1)
        }
    }

    const decrement = () => {
        if (cantidad > 1) {
            setQuantity(cantidad - 1)
        }
    }
    return (
        <div className="conteiner__fluid contador">
           <div className="contadorControles">
                <button className="controlBoton" onClick={decrement}> - </button>
                <h3 className="controlNumero">{cantidad}</h3>
                <button className="controlBoton" onClick={increment}> + </button>
           </div>
           <div>
                <button className="controlAgregar" onClick= {() =>onAdd(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
           </div> 
        </div>
    )
}

export default ItemCount