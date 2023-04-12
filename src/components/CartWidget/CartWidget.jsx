import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img src={cart} alt="cart" className="cartWidgetImg"/>
            0
        </div>
    )
}

export default CartWidget