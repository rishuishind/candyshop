import { useState } from "react"
import CartContext from "./CartContext"

const CartProvider = props => {

    const [quantity, setQuantity] = useState(0);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const cartSetter = (item, num) => {
        const existingCartItems = cartItems.findIndex(it => it.name === item.name);
        const existItem = cartItems[existingCartItems];
        let updatedItems;
        if (!existItem) {
            console.log('inside');
            setCartItems(prev => {
                return ([...prev, { ...item, itemQuant: num }]);
            })

        } else {
            const newQ = existItem.itemQuant + num;
            const newQuan = +newQ;
            const updatedItem = { ...existItem, itemQuant: newQuan }
            updatedItems = [...cartItems]
            updatedItems[existingCartItems] = updatedItem;
            setCartItems(updatedItems);
        }
    }

    const QuanSetter = (num) => {
        setQuantity((prev) => {
            const newQuan = prev + num;
            const newNum = +newQuan;
            return newNum;
        })
    }

    const ItemSetter = (item) => {
        setItems((prev) => {
            return ([...prev, { ...item }]);
        })
    }

    const remover = (shoename, quan) => {
        const idxOfItem = items.findIndex(item => item.name === shoename);
        const isPresent = items[idxOfItem];
        let updatedList;
        if (isPresent) {
            if (quan === 'lq') {
                const newlq = isPresent.lq - 1;
                const newlquan = +newlq;
                const updateList = { ...isPresent, lq: newlquan };
                updatedList = [...items];
                updatedList[idxOfItem] = updateList;
                setItems(updatedList);
            }
            if (quan === 'mq') {
                const newlq = isPresent.mq - 1;
                const newlquan = +newlq;
                const updateList = { ...isPresent, mq: newlquan };
                updatedList = [...items];
                updatedList[idxOfItem] = updateList;
                setItems(updatedList);
            }
            if (quan === 'sq') {
                const newlq = isPresent.sq - 1;
                const newlquan = +newlq;
                const updateList = { ...isPresent, sq: newlquan };
                updatedList = [...items];
                updatedList[idxOfItem] = updateList;
                setItems(updatedList);
            }
        }
    }

    const Items = {
        items: items,
        quantity: quantity,
        cartItems: cartItems,
        setQuantity: QuanSetter,
        setItems: ItemSetter,
        setCartItems: cartSetter,
        removeItem: remover,
    }

    return (
        <CartContext.Provider value={Items} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider