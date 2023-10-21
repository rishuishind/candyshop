import { createContext } from "react";

const FormContext = createContext({
    candies: [],
    addToList: (obj) => { }
});

export default FormContext;