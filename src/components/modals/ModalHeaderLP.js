import { useContext, useState } from "react";
import { UsersContext } from "../../context/UsersContext";


export default function ModalHeaderLP() {
    const [showBtn, setShowBtn] = useState(true);
    const { users } = useContext(UsersContext);

    // printing json array of users
    const handleClick = () => {

        // deleting the ruTakenColor field from each user object - OPT 1
        users.forEach(user => {
            delete user.ruTakenColor;
        });
        console.log('users from done:', users);
        
        // deleting the ruTakenColor field from each user object - OPT 2
        // const kuni = users.map(user => { delete user.ruTakenColor; return user; }) //ruTakenColor
        // console.log('users from done:', kuni);
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
