import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import DataRate from "./paramCells/DataRate";
import DCM from "./paramCells/DCM";
import DeleteUser from "./paramCells/DeleteUser";
import NSS from "./paramCells/NSS.js";
import RUindex from "./paramCells/RUindex";
import SSS from "./paramCells/SSS";
import WIFIcode from "./paramCells/WIFIcode";


export default function UserTableRow({ user, index }) {

    const { colorsToRUs } = useContext(UsersContext);
    // find the matched color for the user ru    
    const [colorToRu] = colorsToRUs.filter(item => item.ru == user.RUindex);
    
    // gives the specific user object
    // const [user] = users.filter(user => ruindex === user.RUindex);
    console.log(user);


    return (
        <div className="rTableRow borderBottom">
            <div className={`rTableCell paramCell56 noBorder ${colorToRu ? `ruTaken${colorToRu.colorNum}` : ''}`}>{index + 1}</div>
            <RUindex ruIndex={user.RUindex} userindex={index} fieldindex={0} />
            <DataRate ruIndex={user.RUindex} userindex={index} fieldindex={1} dataRate={user.DataRate} />
            <DCM ruIndex={user.RUindex} userindex={index} fieldindex={2} dcmval={user.DCM}/>
            <WIFIcode ruIndex={user.RUindex} userindex={index} fieldindex={3} wifiCode={user.WIFICode}/>
            <NSS ruIndex={user.RUindex} userindex={index} fieldindex={4} nSSval={user.nSS}/>
            <SSS ruIndex={user.RUindex} userindex={index} fieldindex={5} sSSval={user.sSS}/>
            <DeleteUser ruIndex={user.RUindex} userindex={index}/>
        </div>
    );
}