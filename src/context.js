import React, {createContext, useState } from "react";


export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [query, setQuery] = useState('')
    

    return (
        <states.Provider value={{query, setQuery}}>
            {children}
        </states.Provider>
    )
}
