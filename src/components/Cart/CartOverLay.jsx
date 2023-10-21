import { useContext } from "react"
import Modal from '../UI/Modal'
import FormContext from "../Context/FormContext"
import ModalCart from "../Context/ModalCart";

const CartOverLay = () => {
    const formCtx = useContext(FormContext);
    const modalCtx = useContext(ModalCart);
    const CartItems = formCtx.candies.map((item) => (
        <div>
            <li>{item.name}</li>
            <li>{item.price}</li>
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