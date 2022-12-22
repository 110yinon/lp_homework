import { useContext, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";
                

export default function NSS({ruIndex, userindex, fieldindex, nSSval }) {

    const [values, setValues] = useState([1,2,3,4]);
    const { dispatch } = useContext(UsersContext);

    const handleChange = (e) => {
        // sended ru index and nSS value     
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, nSS: e.target.value } });
    }

    return (
    <div className="rTableCell noBorder paramCell70">
            <select defaultValue={nSSval} userindex={userindex} fieldindex={fieldindex} onChange={handleChange}>
                {values.map( e => <option key={uuid()} value={e}>{e}</option>)}            
            </select>
        </div>
    );
}