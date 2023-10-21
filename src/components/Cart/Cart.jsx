import { useContext } from "react";
import CartContext from "../Context/CartContext";
import ModalCart from "../Context/ModalCart";

const Cart = () => {
    const ctx = useContext(CartContext);
    const modalCtx = useContext(ModalCart);
    const clickHandler = () => {
        modalCtx.setClicked(!modalCtx.clicked);
    }
    return (
        <div onClick={clickHandler} className='bg-pink-400 rounded py-4 mr-6 mt-3 mb-3 px-3 hover:cursor-pointer' >
            <span>Cart: </span>
            <span> {ctx.quantity} </span>
        </div>
    )
}

export default Cart;