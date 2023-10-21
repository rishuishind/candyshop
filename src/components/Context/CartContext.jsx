import { createContext } from "react";

const CartContext = createContext({
    quantity: 0,
    setQuantity: (num) => { }
})

export default CartContext;