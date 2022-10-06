import React, {createContext, useState } from "react";


export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [query, setQuery] = useState('');
    const [cartMode, setCartMode] = useState(false);
    

    return (
        <states.Provider value={{query, setQuery, cartMode, setCartMode}}>
            {children}
        </states.Provider>
    )
}
