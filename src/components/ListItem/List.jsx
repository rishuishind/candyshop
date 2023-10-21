import { useContext } from "react";
import FormContext from "../Context/FormContext";
import CartContext from "../Context/CartContext";

const List = () => {
    const ctx = useContext(FormContext);
    const cartCtx = useContext(CartContext);

    const listItems = ctx.candies.map((item) => (
        < li >
            {item.name}
            <div className='text-red-700 font-semibold'>
                {item.price}
            </div>
            <button className='bg-black text-white rounded-md p-2 m-2' onClick={() => { cartCtx.setQuantity(1); }}> Buy 1</ button>
            <button className='bg-black text-white rounded-md p-2 m-2' onClick={() => { cartCtx.setQuantity(2); }}>Buy 2</button>
            <button className='bg-black text-white rounded-md p-2 m-2' onClick={() => { cartCtx.setQuantity(3); }}>Buy 3</button>
        </li >
    ));
    console.log('hiii ', cartCtx.items);
    return <>
        <ul>
            {listItems}
        </ul>
    </>;
};

export default List;
