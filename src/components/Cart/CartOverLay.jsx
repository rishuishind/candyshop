import { useContext } from "react"
import Modal from '../UI/Modal'
import ModalCart from "../Context/ModalCart";
import CartContext from "../Context/CartContext";

const CartOverLay = () => {
    const formCtx = useContext(CartContext);
    const modalCtx = useContext(ModalCart);
    const CartItems = formCtx.cartItems.map((item) => (
        <div>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.itemQuant}</li>
        </div>
    ))
    const handleModalClick = () => {
        modalCtx.setClicked(!modalCtx.clicked)
    }

    return (
        (modalCtx.clicked &&
            <Modal Modal onClick={handleModalClick} >
                {CartItems}
            </Modal >
        )

    )
}

export default CartOverLay;