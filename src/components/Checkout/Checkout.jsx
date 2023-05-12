import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, getFirestore } from 'firebase/firestore'
import CheckoutForm from '../CheckoutForm/Checkoutform'
import './Checkout.css'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [orderId, setOrderId] = useState(null)

    const {cartList, precioTotal, vaciarCarrito} = useCartContext()

    const handleSubmit = async (formData) => {
        setIsLoading(true)
        
        const order = {
                buyer: formData,
                items: cartList.map( ({id, nombre, precio}) => ({id, nombre, precio}) ),
                total: precioTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const db = getFirestore()
            const queryCollection = collection(db, 'orders')
            addDoc(queryCollection, order)
            .then(resp => setOrderId(resp.id))
            .catch(err => console.log(err))
            .finally(
                setIsLoading(false),
                vaciarCarrito()
            )
    }

    if(isLoading) {
        <h2 className="closeBillLoader">Closing your bill...</h2>
    }

    if(orderId !== null) {
        <h2 className="idCompra">El ID de la compra es:{orderId}</h2>
    }


    return (
        <div className="checkoutContainer">
            <h2>Checkout</h2>
            <CheckoutForm handleSubmit = {handleSubmit} />
        </div>
    )
    
}

export default Checkout