import { useContext } from "react";
import { UsersContext } from "../../../context/UsersContext";


export default function DCM({ ruIndex, userindex, fieldindex, dcmval }) {

    const { setDCM } = useContext(UsersContext);
    console.log('dcmval-prop:', dcmval);

    const handleChange = (e) => {
        // console.log('DCM:', !(e.target.checked));
        setDCM(ruIndex, !dcmval);
    }

    return (
        <div className="rTableCell noBorder paramCell70">
            <input type="checkbox" userindex={userindex} fieldindex={fieldindex}
                checked={dcmval}
                // value={dcmval}
                onChange={handleChange} />
        </div>
    );
}