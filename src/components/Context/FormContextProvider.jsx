import { useState } from "react"
import FormContext from "./FormContext"

const FormContextProvider = props => {
    const [items, setItems] = useState([]);
    const addHandler = (obj) => {
        setItems((prev) => {
            return [...prev, { name: obj.name, price: obj.price }]
        })
    }
    const formContext = {
        candies: items,
        addToList: addHandler
    }
    return (
        <FormContext.Provider value={formContext}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;
