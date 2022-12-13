import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
// import uuid from 'react-uuid';


export default function RTableCell({ element, tone }) {

    const { addUser, colorsToRUs } = useContext(UsersContext);
    
    const [colorToRu] = colorsToRUs.filter(item => item.ru == element);
    // console.log(`colorToRu - ${element}:`, colorToRu);

    if (element === 'X') {
        return (<div className="rTableCell rTable26Tone ru20">{element}</div>);
    }
    return (<div className={`rTableCell rTable${tone}Tone ru20 ruavilable ruTaken${colorToRu ? colorToRu.colorNum : 16}`}
        onClick={
            () => {
                addUser(element);
            }
        }>{element}</div>);


}