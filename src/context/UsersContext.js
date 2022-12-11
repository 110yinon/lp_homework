import { createContext, useReducer } from 'react';

export const UsersContext = createContext();

export const usersReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_USER':
            return
            break;
        case 'EDIT_USER':
            return
            break;
        default:
            return state;
    }
}



export function UsersProvider({ children }) {

    const [state, dispatch] = useReducer(usersReducer, {
        users: [
            // users: ['bb', 'sara'],
            { 'RUindex': 'bb the king', 'Data Rate': 7, 'DCM': false, 'WIFI Code': 0, 'nSS': 1, 'sSS': 1 },
            { 'RUindex': 'sara the queen','Data Rate': 7, 'DCM': false, 'WIFI Code': 0, 'nSS': 1, 'sSS': 1 }
        ],
        kuni:'ahmed'
    });



    return (
        <UsersContext.Provider value={{ ...state }}>
            {children}
        </UsersContext.Provider>
    );
}
