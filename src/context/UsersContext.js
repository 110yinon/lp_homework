import { createContext, useReducer } from 'react';

export const UsersContext = createContext();

export const usersReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_USER':

            // check if the user to add is already exist:
            const alreayUser = state.users.find(user => user.RUindex === action.payload.RUindex);
            
            // user already exist - no need to add it
            if (alreayUser) {
                return {
                    users: [...state.users],
                    colorsToRUs: [...state.colorsToRUs]
                }
            }
            // user does not exist - added the new user:

            // 1. attching color to new user ru num
            // finds an empty color (w/o ru):
            const emptyColorObj = state.colorsToRUs.find(item => item.ru === -1);
            // no empty color - all colors have attached ru's
            if (!emptyColorObj) {
                return {
                    users: [...state.users, action.payload], // 2. added the new user
                    colorsToRUs: [...state.colorsToRUs]
                }
            }
            // set ru to the empty color
            emptyColorObj.ru = action.payload.RUindex;

            return {
                users: [...state.users, action.payload], // 2. added the new user
                colorsToRUs: [...state.colorsToRUs]
            }
        case 'EDIT_USER':
            let { users } = state;
            // update the edited obj's field value at the desire user obj 
            users = users.map(user => {
                if (user.RUindex === action.payload.RUindex) {
                    return { ...user, ...action.payload }
                }
                return user;
            })
            
            return {
                users: users, // update the state
                colorsToRUs: [...state.colorsToRUs]
            };

        case 'DELETE_USER':

            // remove the user obj with filter techinque
            const usersAfterDelete = state.users.filter(user => user.RUindex !== action.payload.RUindex);

            // remove the ru from color obj with find technique
            // gets direct ref to original obj
            const colorObj = state.colorsToRUs.find(item => item.ru === action.payload.RUindex);
            // if there is color to the deleted user ru :
            if(colorObj){
                colorObj.ru = -1; // release color from deleted user ru
            }

            return {
                users: usersAfterDelete,
                colorsToRUs: [...state.colorsToRUs]
            }

        default:
            return state;
    }
}



export function UsersProvider({ children }) {

    const [state, dispatch] = useReducer(usersReducer, {
        users: [
            { RUindex: 'bb the king', DataRate: '10', DCM: false, WIFICode: '1', nSS: '3', sSS: '4' },
            { RUindex: 'sara the queen', DataRate: '4', DCM: true, WIFICode: '0', nSS: '2', sSS: '1' }
        ]
        // init arr 1 - 15 items, colorsToRUs: [ {colorNum: 1, ru:''}, {colorNum: 2, ru:''}, ...]
        , colorsToRUs: [...Array(15)].map((e, i) => {
            return { colorNum: i + 1, ru: -1 }
        }) 
    });


    const addUser = (ruIndex) => {
        dispatch({
            type: 'ADD_USER', payload: { RUindex: ruIndex, DataRate: '7', DCM: false, WIFICode: '0', nSS: '1', sSS: '1' }
        });
    }

    const setDataRate = (ruIndex, dataRate) => {
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, DataRate: dataRate } });
    }

    const setDCM = (ruIndex, dcm) => {
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, DCM: dcm } });
    }

    const setWIFICode = (ruIndex, wificode) => {
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, WIFICode: wificode } });
    }

    const setNss = (ruIndex, nss) => {
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, nSS: nss } });
    }

    const setSss = (ruIndex, sss) => {
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, sSS: sss } });
    }

    const deleteUser = (ruIndex) => {
        dispatch({ type: 'DELETE_USER', payload: { RUindex: ruIndex } });
    }

    return (
        <UsersContext.Provider value={{ ...state, deleteUser, setSss, setNss, setWIFICode, setDCM, setDataRate, addUser }}>
            {children}
        </UsersContext.Provider>
    );
}
