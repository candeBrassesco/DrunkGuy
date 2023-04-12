import { useCount } from '../../hooks/useCount'
import './ItemCount.css'

const ItemCount = ({ stock, inicio, onAdd }) => {
    
    const { cantidad, increment, decrement, handleOnAdd } = useCount(inicio, stock, onAdd)
 
    return (
        <div className="conteiner__fluid contador">
           <div className="contadorControles">
                <button className="controlBoton" onClick={decrement}> - </button>
                <h3 className="controlNumero">{cantidad}</h3>
                <button className="controlBoton" onClick={increment}> + </button>
           </div>
           <div className="contadorControles">
                <button className="controlAgregar" onClick= {handleOnAdd} disabled={!stock}>
                    Add Cart
                </button>
           </div> 
        </div>
    )
}

export default ItemCount