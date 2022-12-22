import { useContext } from "react";
import { UsersContext } from "../../../context/UsersContext";

export default function DeleteUser({ ruIndex, userindex }) {
    const { dispatch } = useContext(UsersContext);
    
    const handleClick = () => {        
        dispatch({ type: 'DELETE_USER', payload: { RUindex: ruIndex } });
    }

    return (
        <div userindex={userindex}
            onClick={handleClick}
            className="rTableCell noBorder clickable paramCell116">
            <span className="material-symbols-outlined" style={{fontSize: '16px'}}>
                delete
            </span>
        </div>
    );
}