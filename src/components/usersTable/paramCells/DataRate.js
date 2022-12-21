import { useContext, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";

export default function DataRate({ ruIndex, userindex, fieldindex, dataRate }) {
    const [mcs, setMsc] = useState([...Array(12)]); // OR -> [1,2,3...12]

    const { setDataRate } = useContext(UsersContext);
    const handleChange = (e) => {
        setDataRate(ruIndex, e.target.value); // sended ru index and data rate value        
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