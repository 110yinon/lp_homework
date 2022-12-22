import { useContext, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";


export default function WIFIcode({ ruIndex, userindex, fieldindex, wifiCode }) {
    const [values, setValues] = useState(['BCC', 'LDPC']);
    const { dispatch } = useContext(UsersContext);

    const handleChange = (e) => {
        // sended ru index and wifi code value
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, WIFICode: e.target.value } });
    }

    return (
        <div className="rTableCell noBorder paramCell116">
            <select defaultValue={wifiCode} userindex={userindex} fieldindex={fieldindex} onChange={handleChange}>
                {values.map((e, i) => <option key={uuid()} value={i}>{e}</option>)}                
            </select>
        </div>
    );
}