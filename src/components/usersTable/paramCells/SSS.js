import { useContext, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";
                

export default function SSS({ ruIndex, userindex, fieldindex, sSSval }) {

    const [values, setValues] = useState([1,2,3,4]);
    const { dispatch } = useContext(UsersContext);
    
    const handleChange = (e) => {
        // sended ru index and sSS value
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, sSS: e.target.value } });
    }

    return (
    <div className="rTableCell noBorder paramCell70">
            <select defaultValue={sSSval} userindex={userindex} fieldindex={fieldindex} onChange={handleChange}>
                {values.map( e => <option key={uuid()} value={e}>{e}</option>)}
            </select>
        </div>
    );
}