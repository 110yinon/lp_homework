import { useContext } from "react";
import { UsersContext } from "../../../context/UsersContext";


export default function DCM({ ruIndex, userindex, fieldindex, dcmval }) {

    const { dispatch } = useContext(UsersContext);

    const handleChange = () => {
        dispatch({ type: 'EDIT_USER', payload: { RUindex: ruIndex, DCM: !dcmval } });
    }

    return (
        <div className="rTableCell noBorder paramCell70">
            <label className="container">
                <input type="checkbox" userindex={userindex} fieldindex={fieldindex}
                    checked={dcmval}
                    // value={dcmval}
                    onChange={handleChange} />
                <span className="checkmark"></span>
            </label>
        </div>
    );
}