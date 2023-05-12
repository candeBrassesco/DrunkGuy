import { useContext, useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, getFirestore, writeBatch } from 'firebase/firestore'
import CheckoutForm from '../CheckoutForm/Checkoutform'
import './Checkout.css'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [orderId, setOrderId] = useState('')

    const {cartList, precioTotal, vaciarCarrito} = useCartContext()

    const createOrder = async ( { name, phone, email }) => {
        setIsLoading(true)
        
        try {
            const objOrder = {
                buyer: {
                   name, 
                   phone,
                   email
                },
                items: cartList.map( ({id, nombre, precio}) => ({id, nombre, precio}) ),
                total: precioTotal(),
                date: Timestamp.fromDate(new Date())
            }
            
            const batch = writeBatch(db)

            const outOfStock = []
        
            const ids = cartList.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs 
               (query(productsRef, where(documentId(), 'in', ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach (doc =>{
               const dataDoc = doc.data()
               const stockDb = dataDoc.stock

               const productAddedToCart = cartList.find(prod => prod.id == doc.id)
               const prodQuantity = productAddedToCart?.quantity

               if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
               } else {
                    outOfStock.push({ id: doc.id, ... dataDoc })
               }
            })

            if(outOfStock.lenght === 0) {
               await batch.commit()

               const orderRef = collection(db, 'orders')

               const orderAdded = await addDoc (orderRef, objOrder)

               setOrderId(orderAdded.id)
               vaciarCarrito()
            } else {
               console.log('hay productos que están fuera de stock')
            }
             
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return <h2 className="loaderCuenta" > Loading your final bill... </h2>
    }

    if (orderId) {
        return <h2 className="cuentaCargada"> El ID de tu compra es: {orderId} </h2>
    }

    return (
        <div className="checkoutContainer">
            <h2>Checkout</h2>
            <CheckoutForm onConfirm = {createOrder} />
        </div>
    )
    
}

export default Checkout