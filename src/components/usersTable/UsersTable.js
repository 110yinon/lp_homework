import UsersTableHeading from "./UsersTableHeading";
import UsersTableBody from "./UsersTableBody";

export default function UsersTable(){

    return(
        <div id="users-table" className="rTable">
            <UsersTableHeading/>
            <UsersTableBody/>
        </div>
    );
}