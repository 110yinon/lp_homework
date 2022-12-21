import { useContext, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";
                

export default function NSS({ruIndex, userindex, fieldindex, nSSval }) {

    const [values, setValues] = useState([1,2,3,4]);
    const { setNss } = useContext(UsersContext);

    const handleChange = (e) => {
        setNss(ruIndex, e.target.value); // sended ru index and nSS value     
    }

    return (
    <div className="rTableCell noBorder paramCell70">
            <select defaultValue={nSSval} userindex={userindex} fieldindex={fieldindex} onChange={handleChange}>
                {values.map( e => <option key={uuid()} value={e}>{e}</option>)}            
            </select>
        </div>
    );
}