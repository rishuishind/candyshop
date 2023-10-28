import { useState } from "react";
import CartOverLay from "./components/Cart/CartOverLay";
import CartProvider from "./components/Context/CartProvider";
import ModalCart from "./components/Context/ModalCart";
import InputForm from "./components/Form/InputForm";
import List from "./components/ListItem/List";


function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <CartProvider>
      <ModalCart.Provider value={{ clicked: clicked, setClicked: setClicked }}>
        <CartOverLay />
        <InputForm />
        <List />
      </ModalCart.Provider>
    </CartProvider>
  );
}

export default App;
