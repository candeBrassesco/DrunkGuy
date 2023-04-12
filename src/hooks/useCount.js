import { useState } from "react"


export const useCount = (inicio, stock, onAdd ) => {
    const [cantidad, setQuantity] = useState(inicio)

    const increment = () => {
        if (cantidad < stock) {
            setQuantity(cantidad + 1)
        }
    }

    const decrement = () => {
        if (cantidad > 1) {
            setQuantity(cantidad - 1)
        }
    }

    function handleOnAdd() {
        onAdd(cantidad)
    }

    return {cantidad, increment, decrement, handleOnAdd}
}