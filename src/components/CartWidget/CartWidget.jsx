import './CartWidget.css'
import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img src={cart} alt="cart" className="cartWidgetImg"/>
            0
        </div>
    )
}

export default CartWidget