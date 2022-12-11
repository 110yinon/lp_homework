import { createContext, useReducer } from 'react';

export const UsersContext = createContext();

export const usersReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_USER':
            console.log('dispatch - ADD_USER:', state);
            // state.users = [...state.users, action.payload];
            // console.log('dispatch - state.users:', state.users);
            // return state;
            // state.users
            return {
                users: [...state.users, action.payload]
            }
            break;
        case 'EDIT_USER':
            console.log('dispatch - EDIT_USER:', state);
            let { users } = state;
            console.log('payload:',action.payload);
            users = users.map(user => {
                if (user.RUindex === action.payload.RUindex) {
                    console.log('match!!!:', user.RUindex);
                    return { ...user, ...action.payload }
                }
                return user;
            })
            console.log('users:', users);
            return { users: users };
            
        default:
            return state;
    }
}



export function UsersProvider({ children }) {

    const [state, dispatch] = useReducer(usersReducer, {
        users: [
            // users: ['bb', 'sara'],
            { RUindex: 'bb the king', DataRate: 7, DCM: false, WIFICode: 0, nSS: 1, sSS: 1 },
            { RUindex: 'sara the queen', DataRate: 7, DCM: false, WIFICode: 0, nSS: 1, sSS: 1 }
        ]
    });

    const addUser = (ruIndex) => {
        console.log('addUser:', ruIndex);
        dispatch({
            type: 'ADD_USER', payload: { RUindex: ruIndex, DataRate: 7, DCM: false, WIFICode: 0, nSS: 1, sSS: 1 }
        });
    }

    const setDataRate = (ruIndex, dataRate) => {
        console.log('setDataRate:', ruIndex, dataRate);
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, DataRate: dataRate } });
    }


    return (
        <UsersContext.Provider value={{ ...state, setDataRate, addUser }}>
            {children}
        </UsersContext.Provider>
    );
}
