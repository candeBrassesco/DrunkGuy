import { useCartContext } from '../../context/CartContext'
import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    const {cantidadTotal} = useCartContext()


    return (
        <div className="cartWidget">
            <img src={cart} alt="cart" className="cartWidgetImg"/>
            {cantidadTotal()}
        </div>
    )
}

export default CartWidget