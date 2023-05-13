import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, getFirestore } from 'firebase/firestore'
import './Checkout.css'
import ChecKoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [orderId, setOrderId] = useState(null)

    const {cartList, precioTotal, vaciarCarrito} = useCartContext()

    const handleSubmit = async ({name, phone, email}) => {
        const order = {
                buyer: {
                    name,
                    phone,
                    email
                },
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
                vaciarCarrito(),
            )         
    }

    return (
        <>
        {   orderId !== null ?
                <h2 className="idCompra"> El ID de la orden de compra es: {orderId} </h2>
            :
                <div className="container__fluid checkoutContainer">
                   <h2>Checkout</h2>
                   <ChecKoutForm onConfirm={handleSubmit}/>
                </div>
        }
        </>    
    )
}

export default Checkout