import React, { createContext, useState } from 'react';
import {itemData} from '../components/itemData'

export const GlobalAppContext = createContext(null);


function GlobalContext() {
    const [products, setProducts] = useState(itemData)
    const [input, setInput] = useState("");
    

    const onSearch =  products.filter(result  => {
        return result.title.toLowerCase().includes(input.toLowerCase())
    })  

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
         < GlobalAppContext.Provider value={[onSearch, handleChange, products, input]}>

         </GlobalAppContext.Provider>
    )
}

export default GlobalContext
