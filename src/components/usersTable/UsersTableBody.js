import { useContext, useState } from "react";
import UserTableRow from "./UserTableRow";
import uuid from 'react-uuid';
import { UsersContext } from '../../context/UsersContext';

export default function UsersTableBody() {
    
    const { users } = useContext(UsersContext);

    return (
        <div className="rTableBody">
            {users && users.map((user, i) => <UserTableRow key={uuid()} user={user} index={i} />)}
        </div>
    );
}