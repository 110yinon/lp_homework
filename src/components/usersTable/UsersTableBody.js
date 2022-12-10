import { useContext, useState } from "react";
import UserTableRow from "./UserTableRow";
import uuid from 'react-uuid';
import { UsersContext } from '../../context/UsersContext';

export default function UsersTableBody() {

    const [ruUsers, setRuUsers] = useState([55, 14, 4]);
    const { users, kunifunc } = useContext(UsersContext);

    console.log('users:', users);

    return (
        <div className="rTableBody">
            <button onClick={kunifunc}>click</button>
            <UserTableRow key={uuid()} user={'kuni test'} index={7777} />
            {ruUsers.map((ruUser, i) => <UserTableRow key={uuid()} user={ruUser} index={i} />)}
        </div>
    );
}