import { useState } from "react";
import CartOverLay from "./components/Cart/CartOverLay";
import CartProvider from "./components/Context/CartProvider";
import FormContextProvider from "./components/Context/FormContextProvider";
import ModalCart from "./components/Context/ModalCart";
import InputForm from "./components/Form/InputForm";
import List from "./components/ListItem/List";


function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <FormContextProvider>
      <CartProvider>
        <ModalCart.Provider value={{ clicked: clicked, setClicked: setClicked }}>
          <CartOverLay />
          <InputForm />
          <List />
        </ModalCart.Provider>
      </CartProvider>
    </FormContextProvider >
  );
}

export default App;
