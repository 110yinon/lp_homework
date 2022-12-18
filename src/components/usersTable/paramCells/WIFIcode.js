import { useContext, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";
import '../../table/RTableCell.css';


export default function WIFIcode({ ruIndex, userindex, fieldindex, wifiCode }) {
    const [values, setValues] = useState(['BCC', 'LDPC']);
    const { setWIFICode } = useContext(UsersContext);

    const handleChange = (e) => {
        console.log('handle change:', e.target.value);
        setWIFICode(ruIndex, e.target.value); // sended ru index and wifi code value
    }

    return (
        <div className="rTableCell noBorder paramCell116">
            <select defaultValue={wifiCode} userindex={userindex} fieldindex={fieldindex} onChange={handleChange}>
                {values.map((e, i) => <option key={uuid()} value={i}>{e}</option>)}
                
                {/* <option value="0">BCC</option>
                <option value="1">LDPC</option> */}
            </select>
        </div>
    );
}