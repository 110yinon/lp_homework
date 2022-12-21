import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";


export default function RTableCell({ element, tone }) {

    const { addUser, colorsToRUs } = useContext(UsersContext);
    // find the matched color for the already clicked ru (element)
    const [colorToRu] = colorsToRUs.filter(item => item.ru == element);    

    if (element === 'X') {
        return (<div className="rTableCell rTable26Tone ru20" style={{backgroundColor: '#292929', color:'grey'}}>{element}</div>);
    }
    return (<div className={`rTableCell rTable${tone}Tone ru20 ruavilable ${colorToRu ? `ruTaken${colorToRu.colorNum}` : ''}`}
        onClick={
            () => {
                addUser(element);
            }
        }>{element}</div>);


}