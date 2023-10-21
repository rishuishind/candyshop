import { useState } from "react"
import CartContext from "./CartContext"

const CartProvider = props => {

    const [quantity, setQuantity] = useState(0);

    const QuanSetter = (num) => {
        setQuantity((prev) => {
            const newQuan = prev + num;
            const newNum = +newQuan;
            return newNum;
        })
    }

    const Items = {
        quantity: quantity,
        setQuantity: QuanSetter
    }

    return (
        <CartContext.Provider value={Items} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider