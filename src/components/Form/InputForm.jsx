import { useContext, useRef } from "react";
import Cart from "../Cart/Cart";
import CartContext from "../Context/CartContext";

const InputForm = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const lref = useRef();
    const mref = useRef();
    const sref = useRef();
    const formCtx = useContext(CartContext);
    const submitHandler = (e) => {
        e.preventDefault();
        const item = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            itemQuant: 0,
            lq: lref.current.value,
            mq: mref.current.value,
            sq: sref.current.value
        }
        formCtx.setItems(item);
    }
    return (
        <nav className='bg-black text-white flex justify-between h-20' >
            <form>
                <label className='p-1' htmlFor="CandyName">ShoeName</label>
                <input className='p-1 text-black mt-4' ref={nameRef} type="text" />
                <label className='p-1 ' htmlFor="Description">Description</label>
                <input className='p-1 text-black' type="text" />
                <label className='p-1' htmlFor="Price">Price</label>
                <input className='p-1 text-black' ref={priceRef} type="number" />
                <label htmlFor="lq">L</label>
                <input className='p-1 text-black' ref={lref} type="number" />
                <label htmlFor="mq">M</label>
                <input className='p-1 text-black' ref={mref} type="number" />
                <label htmlFor="sq">S</label>
                <input className='p-1 text-black' ref={sref} type="number" />
                <button className='p-1 bg-red-400 mb-3 rounded' onClick={submitHandler}>Submit</button>
            </form>
            <Cart />
        </nav>
    );
};

export default InputForm;