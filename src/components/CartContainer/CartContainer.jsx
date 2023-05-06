import { useCartContext } from "../../context/CartContext"
import './CartContainer.css'

const CartContainer = () => {
   const {cartList, vaciarCarrito } = useCartContext()
   console.log(cartList)

    return (
        <div className="cartContainer">
            <div className="col cartContenido">
                {cartList.map(product => (
                   <div key={product.id} className="row cartItem">
                       <div className="col-md-2">
                           <img className="cartItemImg" src={product.img} alt={product.nombre}/>
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
                           <button className="cartEliminarItem"> x </button>
                       </div>    
                   </div>
                
                ))}
                <button className="cartClean" onClick={vaciarCarrito}> Clean Cart </button>
            </div>
        </div>
    )
}

export default CartContainer