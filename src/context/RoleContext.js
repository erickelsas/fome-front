import { createContext, useState } from "react";

export const RoleContext = createContext();

export const RoleContextProvider = ({children}) => {
    const [role, setRole] = useState('visitant');

    return(
        <RoleContext.Provider value={{role, setRole}}>
            {children}
        </RoleContext.Provider>
    )
}