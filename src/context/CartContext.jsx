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
        // los ... son por si ya tenía algo en el cartList
        setCartList([
            ... cartList,
            newProduct
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }



    return (
       <CartContext.Provider value={{
           cartList,
           agregarAlCart,
           vaciarCarrito
       }}>  
           {children}
       </CartContext.Provider>
    )
}