import React, {createContext, useState } from "react";

import { books } from '../src/dummyData'


export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [query, setQuery] = useState('');
    const [cartMode, setCartMode] = useState(false);
    const [cart,setCart] = useState([])
    

    return (
        <states.Provider value={{query, setQuery, cartMode, setCartMode,cart,setCart,books}}>
            {children}
        </states.Provider>
    )
}
