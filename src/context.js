import React, {createContext } from "react";


export const states = createContext();

export const StateContextProvider = ({children}) => {

    

    return (
        <states.Provider value={{}}>
            {children}
        </states.Provider>
    )
}
