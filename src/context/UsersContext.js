import { createContext, useReducer } from 'react';

export const UsersContext = createContext();

export const usersReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_USER':
            console.log('dispatch - ADD_USER');

            // check from user exist:
            const alreayUser = state.users.find(user => user.RUindex === action.payload.RUindex);
            console.log('alreayUser:', alreayUser);
            // user already exist
            if (alreayUser) {
                return {
                    users: [...state.users],
                    colorsToRUs: [...state.colorsToRUs]
                }
            }
            // user does not exist - added new user:

            // searching color num w/o ru
            const emptyColorObj = state.colorsToRUs.find(item => item.ru === -1);
            // no empty color - all colors have attached ru's
            if (!emptyColorObj) {
                return {
                    users: [...state.users, action.payload],
                    colorsToRUs: [...state.colorsToRUs]
                }
            }
            // set ru to the empty color
            emptyColorObj.ru = action.payload.RUindex;


            // switching the new attached ru color with the empty one
            // const newColorsToRUs = state.colorsToRUs.map(item => {
            //     if (item.ru === emptyColorObj.ru) {
            //         return emptyColorObj;
            //     }
            //     return item;
            // });
            // console.log('newColorsToRUs:', newColorsToRUs);


            return {
                users: [...state.users, action.payload], // added the new user
                colorsToRUs: [...state.colorsToRUs]
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
            return {
                users: users,
                colorsToRUs: [...state.colorsToRUs]
            };

        case 'DELETE_USER':
            console.log('dispatch - DELETE_USER, state before:', state);
            // remove the user obj with filter techinque
            const usersAfterDelete = state.users.filter(user => user.RUindex !== action.payload.RUindex);
            console.log('dispatch - DELETE_USER, state after:', usersAfterDelete);

            // remove the ru from color obj with filter techinque
            const colorObj = state.colorsToRUs.find(item => item.ru === action.payload.RUindex);
            if(colorObj){
                colorObj.ru = -1;
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
            // users: ['bb', 'sara'],
            { RUindex: 'bb the king', DataRate: 10, DCM: false, WIFICode: 1, nSS: 3, sSS: 4 },
            { RUindex: 'sara the queen', DataRate: 4, DCM: true, WIFICode: 0, nSS: 2, sSS: 1 }
        ]
        // , colorsToRUs: [{ colorNum: 1, ru: '67' }, { colorNum: 2, ru: '54' }]


        // opt 2 to rutaken color
        , colorsToRUs: [...Array(15)].map((e, i) => {
            return { colorNum: i + 1, ru: -1 }
        }) // init arr 1 - 15 items, colorsToRUs: [ {colorNum: 1, ru:''}, {colorNum: 2, ru:''}, ...]
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
