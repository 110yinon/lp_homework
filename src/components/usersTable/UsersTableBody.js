import { useContext, useState } from "react";
import UserTableRow from "./UserTableRow";
import uuid from 'react-uuid';
import { UsersContext } from '../../context/UsersContext';

export default function UsersTableBody() {

    const [ruUsers, setRuUsers] = useState([55, 14, 4]);
    const { users } = useContext(UsersContext);
    
    // console.log('users:', users[1].RUindex);

    return (
        <div className="rTableBody">
            <UserTableRow key={uuid()} user={'kuni test'} index={7777} />
            {/* {ruUsers.map((ruUser, i) => <UserTableRow key={uuid()} user={ruUser} index={i} />)} */}
            {users && users.map((user, i) => <UserTableRow key={uuid()} ruindex={user.RUindex} index={i} />)}
        </div>
    );
}