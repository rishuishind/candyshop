import { useContext } from "react";
import CartContext from "../Context/CartContext";

const List = () => {
    const cartCtx = useContext(CartContext);

    const listItems = cartCtx.items.map((item) => (
        < li >
            {item.name}
            <div className='text-red-700 font-semibold'>
                {item.price}
            </div>
            <button className='bg-black text-white rounded-md p-2 m-2' onClick={() => { cartCtx.setQuantity(1); cartCtx.setCartItems(item, 1); cartCtx.removeItem(item.name, 'lq'); }}> Buy L({item.lq}) </ button>
            <button className='bg-black text-white rounded-md p-2 m-2' onClick={() => { cartCtx.setQuantity(1); cartCtx.setCartItems(item, 1); cartCtx.removeItem(item.name, 'mq'); }}>Buy M({item.mq})</button>
            <button className='bg-black text-white rounded-md p-2 m-2' onClick={() => { cartCtx.setQuantity(1); cartCtx.setCartItems(item, 1); cartCtx.removeItem(item.name, 'sq'); }}>Buy S({item.sq})</button>
        </li >
    ));
    return <>
        <ul>
            {listItems}
        </ul>
    </>;
};

export default List;
