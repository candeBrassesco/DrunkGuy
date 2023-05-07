// se crea el contexto para el cartwidget
import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext (CartContext)

// componente para enmascarar contexto
// como el CartContextProvider va a envolver todo el div de la app, este pasa a
// ser un children de CartContextProvider. El div de la app se inyecta como una
// prop en este componente

export const CartContextProvider = ({children}) => {

    // Inyectando el div de App como un children en CartContextProvider
    // evito pasar todos los estados y funciones en la App
    // se limpia el código

    const [cartList, setCartList] = useState ([])

    const agregarAlCart = (newProduct) => {
        
        const indexProduct = cartList.findIndex(product => product.id == newProduct.id)

        if (indexProduct == -1) {
            setCartList([
                ... cartList,
                newProduct
            ])
        } else {
            cartList[indexProduct].quantity += newProduct.quantity
            setCartList([ ... cartList])
        }
        
    }
 
    //función para vaciar carrito
    const vaciarCarrito = () => {
        setCartList([])
    }

   //función para calcular la cantidad total de productos en el cart
   const cantidadTotal = () => cartList.reduce((cantidadTotal, objProducto) => cantidadTotal += objProducto.quantity, 0)

   //función para calcular el precio total
   const precioTotal = () => {
       return cartList.reduce ((precioTotal, objProducto) => precioTotal += (objProducto.quantity * objProducto.precio), 0)
   }

   //función para eliminar por item
   const eliminarProducto = (pid) => {
          setCartList(cartList.filter(product => product.id !== pid ))
   }

    return (
       <CartContext.Provider value={{
           cartList,
           agregarAlCart,
           vaciarCarrito,
           cantidadTotal,
           precioTotal,
           eliminarProducto
       }}>  
           {children}
       </CartContext.Provider>
    )
}