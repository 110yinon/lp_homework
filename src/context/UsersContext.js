import { createContext } from 'react';

export const UsersContext = createContext();





export function UsersProvider({ children }) {

    const users = ['bb', 'sara'];
    const kunifunc = () => {
        console.log('hi kuni');
    }

    return (
        <UsersContext.Provider value={{ users, kunifunc }}>
            {children}
        </UsersContext.Provider>
    );
}
