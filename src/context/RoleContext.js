import { createContext, useState } from "react";

export const RoleContext = createContext();

export const RoleContextProvider = ({children}) => {
    const [role, setRole] = useState('KITCHEN_ROLE');

    return(
        <RoleContext.Provider value={{role, setRole}}>
            {children}
        </RoleContext.Provider>
    )
}