import { useState } from "react";
import UserTableRow from "./UserTableRow";
import uuid from 'react-uuid';

export default function UsersTableBody() {
    
    const [ruUsers, setRuUsers] = useState([55, 14, 4]);

    return (
        <div className="rTableBody">
            <UserTableRow key={uuid()} user={'kuni test'} index={7777} />
            {ruUsers.map((ruUser, i) => <UserTableRow key={uuid()} user={ruUser} index={i} />)}
        </div>
    );
}