import { useState } from "react";
import uuid from 'react-uuid';

export default function DataRate({ userindex, fieldindex }) {
    const [mcs, setMsc] = useState([...Array(12)]);

    return (
        <div className="rTableCell noBorder paramCell116">
            <select userindex={userindex} fieldindex={fieldindex}>
                {mcs.map((e, i) => {
                    return <option key={uuid()} value={`${i}`}>{`MCS${i}`}</option>
                })}
            </select>
        </div>
    );
}