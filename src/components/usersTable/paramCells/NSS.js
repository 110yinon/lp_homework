import { useState } from "react";
import uuid from 'react-uuid';
                

export default function NSS({ userindex, fieldindex }) {

    const [values, setValues] = useState([1,2,3,4]);

    return (
    <div className="rTableCell noBorder paramCell70">
            <select userindex={userindex} fieldindex={fieldindex}>
            {values.map( e => <option key={uuid()} value={e}>{e}</option>)}
            
                {/* <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option> */}
            </select>
        </div>
    );
}