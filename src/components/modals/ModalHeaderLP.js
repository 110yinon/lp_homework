import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../context/UsersContext";


export default function ModalHeaderLP() {
    const [showBtn, setShowBtn] = useState(false);
    const { users } = useContext(UsersContext);

    // checks for switching on/off the btn due to users arr
    useEffect(() => {
        if (users.length) {
            setShowBtn(true);
        }
        else{
            setShowBtn(false);
        }
    }, [users]);

    // printing json array of users
    const handleClick = () => {        
        console.log('users from done:', users);
        const usersJson = JSON.stringify(users);
        console.log('users as JSON:', usersJson);
}
    return (
        <div className="modal-header-lp">
            <h2>
                Click on RU to add user
                {showBtn && <span id="close-modal" className="clickable" onClick={handleClick}
                    style={{ paddingLeft: '450px', width: '40px' }}>
                    Done
                </span>}
            </h2>
        </div>
    );
}
