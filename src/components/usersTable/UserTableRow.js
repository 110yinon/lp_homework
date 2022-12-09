import DataRate from "./paramCells/DataRate";


export default function UserTableRow() {
    return (
        <div className="rTableRow">
            <div className="rTableCell paramCell56 noBorder ruTaken1">1</div>
            <div className="rTableCell noBorder paramCell56">
                <span userindex="0" fieldindex="0">57</span>
            </div>
            <DataRate userindex={18} fieldindex={26}/>
            <div className="rTableCell noBorder paramCell70">
                <input type="checkbox" userindex="0" fieldindex="2" />
            </div>
            <div className="rTableCell noBorder paramCell116">
                <select userindex="0" fieldindex="3">
                    <option value="0">BCC</option>
                    <option value="1">LDPC</option>
                </select>
            </div>
            <div className="rTableCell noBorder paramCell70">
                <select userindex="0" fieldindex="4">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="rTableCell noBorder paramCell70">
                <select userindex="0" fieldindex="5">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div userindex="0" className="rTableCell noBorder clickable paramCell116">X</div>
        </div>
    );
}