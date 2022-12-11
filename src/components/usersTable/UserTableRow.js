import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import DataRate from "./paramCells/DataRate";
import DCM from "./paramCells/DCM";
import NSS from "./paramCells/NSS.js";
import RUindex from "./paramCells/RUindex";
import SSS from "./paramCells/SSS";
import WIFIcode from "./paramCells/WIFIcode";


export default function UserTableRow({ user, index }) {

    const { users, dispatch } = useContext(UsersContext);
    
    // gives the specific user object
    // const [user] = users.filter(user => ruindex === user.RUindex);
    console.log(user);


    return (
        <div className="rTableRow">
            <div className="rTableCell paramCell56 noBorder ruTaken1">{index + 1}</div>
            <RUindex ruIndex={user.RUindex} userindex={index} fieldindex={0} />
            <DataRate ruIndex={user.RUindex} userindex={index} fieldindex={1} dataRate={user.DataRate} />
            <DCM userindex={index} fieldindex={2} />
            <WIFIcode userindex={index} fieldindex={3} />
            <NSS userindex={index} fieldindex={4} />
            <SSS userindex={index} fieldindex={5} />
            <div userindex="0" className="rTableCell noBorder clickable paramCell116">X</div>
        </div>
    );
}