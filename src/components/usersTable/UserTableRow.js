

export default function UserTableRow() {
    return (
        <div className="rTableRow">
            <div className="rTableCell paramCell56 noBorder ruTaken1">1</div>
            <div className="rTableCell noBorder paramCell56">
                <span userindex="0" fieldindex="0">57</span>
            </div>
            <div className="rTableCell noBorder paramCell116">
                <select userindex="0" fieldindex="1">
                    <option value="0">MCS0</option>
                    <option value="1">MCS1</option>
                    <option value="2">MCS2</option>
                    <option value="3">MCS3</option>
                    <option value="4">MCS4</option>
                    <option value="5">MCS5</option>
                    <option value="6">MCS6</option>
                    <option value="7">MCS7</option>
                    <option value="8">MCS8</option>
                    <option value="9">MCS9</option>
                    <option value="10">MCS10</option>
                    <option value="11">MCS11</option>
                </select>
            </div>
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