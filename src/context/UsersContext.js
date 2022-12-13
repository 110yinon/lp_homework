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
            console.log('payload:', action.payload);
            users = users.map(user => {
                if (user.RUindex === action.payload.RUindex) {
                    console.log('match!!!:', user.RUindex);
                    return { ...user, ...action.payload }
                }
                return user;
            })
            console.log('users:', users);
            return { users: users };

        case 'DELETE_USER':
            console.log('dispatch - DELETE_USER, state before:', state);
            let usersAfterDelete = state.users.filter(user => user.RUindex !== action.payload.RUindex);
            console.log('dispatch - DELETE_USER, state after:', usersAfterDelete);
            return { users: usersAfterDelete }

        default:
            return state;
    }
}



export function UsersProvider({ children }) {

    const [state, dispatch] = useReducer(usersReducer, {
        users: [
            // users: ['bb', 'sara'],
            { ruTakenColor: 1, RUindex: 'bb the king', DataRate: 10, DCM: false, WIFICode: 1, nSS: 3, sSS: 4 },
            { ruTakenColor: 2, RUindex: 'sara the queen', DataRate: 4, DCM: true, WIFICode: 0, nSS: 2, sSS: 1 }
        ]
        // opt 2 to rutaken color - not implement yet
        // ,colorsToRUs: [[...Array(15)].map((e, i) => { 
        //     return { colorNum: i + 1, ru: ''} 
        // })] // init arr 1 - 15 items
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

    const setDCM = (ruIndex, dcm) => {
        console.log('setDCM:', ruIndex, dcm);
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, DCM: dcm } });
    }

    const setWIFICode = (ruIndex, wificode) => {
        console.log('setWIFICode:', ruIndex, wificode);
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, WIFICode: wificode } });
    }


    const setNss = (ruIndex, nss) => {
        console.log('setNss:', ruIndex, nss);
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, nSS: nss } });
    }

    const setSss = (ruIndex, sss) => {
        console.log('setSss:', ruIndex, sss);
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, sSS: sss } });
    }


    const deleteUser = (ruIndex) => {
        console.log('deleteUser:', ruIndex);
        dispatch({ type: 'DELETE_USER', payload: { RUindex: ruIndex } });
    }

    return (
        <UsersContext.Provider value={{ ...state, deleteUser, setSss, setNss, setWIFICode, setDCM, setDataRate, addUser }}>
            {children}
        </UsersContext.Provider>
    );
}
