import DataRate from "./paramCells/DataRate";
import DCM from "./paramCells/DCM";
import NSS from "./paramCells/NSS.js";
import RUindex from "./paramCells/RUindex";
import SSS from "./paramCells/SSS";
import WIFIcode from "./paramCells/WIFIcode";


export default function UserTableRow() {
    return (
        <div className="rTableRow">
            <div className="rTableCell paramCell56 noBorder ruTaken1">1</div>
            <RUindex ruIndex={777} userindex={18} fieldindex={26} />
            <DataRate userindex={18} fieldindex={26} />
            <DCM userindex={18} fieldindex={26} />
            <WIFIcode userindex={18} fieldindex={26} />
            <NSS userindex={18} fieldindex={26}/>
            <SSS userindex={18} fieldindex={26}/>
            <div userindex="0" className="rTableCell noBorder clickable paramCell116">X</div>            
        </div>
    );
}