import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import './CartContainer.css'

const CartContainer = () => {
   const {cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()
   console.log(cartList)

    return (
        cartList.length == 0 ?
            <div className="conteiner__fluid cartVacio">
                <img></img>
                <h2>¡You are still sober!</h2>
                <Link className="cartVacioLink" to='/'>
                   <button>Start Drinking</button>
                </Link>
            </div>
        :
            <div className="cartContainer">
                <div className="cartContenido">
                   {cartList.map(product => (
                       <div key={product.id} className="row cartItem">
                            <div className="col-md-2">
                            <img className="img-fluid cartItemImg" src={product.img} alt={product.nombre}/>
                            </div>
                            <div className="col-md-3">
                               <p>{product.nombre}</p>
                            </div>
                            <div className="col-md-2">
                               <p>x{product.quantity}</p>
                            </div>    
                            <div className="col-md-3">
                               <p>${(product.quantity)*(product.precio)}</p>
                            </div>
                            <div className="col-md-2">
                               <button className="cartEliminarItem" onClick={()=>eliminarProducto(product.id)}> x </button> 
                            </div>
                       </div>
                ))}   
                    <div className="cartPrecioTotal">
                        <h2>precio total: ${precioTotal()}</h2>
                    </div>
                    <button className="cartClean" onClick={vaciarCarrito}> Clean Cart </button>
                </div>
            </div>
    )
}

export default CartContainer