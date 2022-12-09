import { useState } from "react";
import uuid from 'react-uuid';


export default function WIFIcode({ userindex, fieldindex }) {
    const [values, setValues] = useState(['BCC', 'LDPC']);

    return (
        <div className="rTableCell noBorder paramCell116">
            <select userindex={userindex} fieldindex={fieldindex}>
                {values.map((e, i) => <option key={uuid()} value={i}>{e}</option>)}
                
                {/* <option value="0">BCC</option>
                <option value="1">LDPC</option> */}
            </select>
        </div>
    );
}