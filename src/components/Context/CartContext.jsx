import { createContext } from "react";

const CartContext = createContext({
    items: [],
    cartItems: [],
    quantity: 0,
    setQuantity: (num) => { },
    setItems: (item) => { },
    setCartItems: (item) => { },
    removeItem: (name) => { },
})

export default CartContext;