import { useContext } from "react";
import { UsersContext } from "../../../context/UsersContext";

export default function DeleteUser({ ruIndex, userindex }) {
    const { deleteUser } = useContext(UsersContext);
    // console.log('userindex:', userindex);
    const handleClick = () => {
        deleteUser(ruIndex);
    }

    return (
        <div userindex={userindex}
            onClick={handleClick}
            className="rTableCell noBorder clickable paramCell116">X</div>
    );
}