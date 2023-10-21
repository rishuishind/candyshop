import { useContext, useRef } from "react";
import FormContext from "../Context/FormContext";
import Cart from "../Cart/Cart";

const InputForm = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const formCtx = useContext(FormContext);
    const submitHandler = (e) => {
        e.preventDefault();
        formCtx.addToList({
            name: nameRef.current.value,
            price: priceRef.current.value
        })
    }
    return (
        <nav className='bg-black text-white flex justify-between h-20' >
            <form>
                <label className='p-2' htmlFor="CandyName">CandyName</label>
                <input className='p-2 text-black mt-4' ref={nameRef} type="text" />
                <label className='p-2 ' htmlFor="Description">Description</label>
                <input className='p-2 text-black' type="text" />
                <label className='p-2' htmlFor="Price">Price</label>
                <input className='p-2 text-black' ref={priceRef} type="number" />
                <button className='p-2 bg-red-400 ml-5 rounded' onClick={submitHandler}>Submit</button>
            </form>
            <Cart />
        </nav>
    );
};

export default InputForm;