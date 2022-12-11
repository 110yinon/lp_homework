import { useContext, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";

export default function DataRate({ ruIndex, userindex, fieldindex }) {
    const [mcs, setMsc] = useState([...Array(12)]);

    const { setDataRate } = useContext(UsersContext);
    const handleChange = (e) => {
        console.log('handle change:', e.target.value);
        setDataRate(ruIndex, e.target.value); // sended ru index and data rate value
        // dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, DataRate: e.target.value } });
    }

    return (
        <div className="rTableCell noBorder paramCell116">
            <select userindex={userindex} fieldindex={fieldindex} onChange={handleChange}>
                {mcs.map((e, i) => {
                    return <option key={uuid()} value={i} >{`MCS${i}`}</option>
                })}
            </select>
        </div>
    );
}