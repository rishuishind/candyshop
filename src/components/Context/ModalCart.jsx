import { createContext } from "react";

const ModalCart = createContext({
    clicked: false,
    setClicked: () => { }
})
export default ModalCart;