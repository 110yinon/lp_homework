import { useContext, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";
import '../../table/RTableCell.css';
                

export default function SSS({ ruIndex, userindex, fieldindex, sSSval }) {

    const [values, setValues] = useState([1,2,3,4]);
    const { setSss } = useContext(UsersContext);
    
    const handleChange = (e) => {
        console.log('handle change:', e.target.value);
        setSss(ruIndex, e.target.value); // sended ru index and sSS value
    }

    return (
    <div className="rTableCell noBorder paramCell70">
            <select defaultValue={sSSval} userindex={userindex} fieldindex={fieldindex} onChange={handleChange}>
            {values.map( e => <option key={uuid()} value={e}>{e}</option>)}
            
                {/* <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option> */}
            </select>
        </div>
    );
}