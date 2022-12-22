import { useContext, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";

export default function DataRate({ ruIndex, userindex, fieldindex, dataRate }) {
    const [mcs, setMsc] = useState([...Array(12)]); // OR -> [1,2,3...12]

    const { dispatch } = useContext(UsersContext);
     // sended ru index and data rate value        
    const handleChange = (e) => {
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, DataRate: e.target.value } });
    }

    return (
        <div className="rTableCell noBorder paramCell116">
            <select defaultValue={dataRate} userindex={userindex} fieldindex={fieldindex} onChange={handleChange}>
                {mcs.map((e, i) => {
                    return <option key={uuid()} value={i} >{`MCS${i}`}</option>
                })}
            </select>
        </div>
    );
}