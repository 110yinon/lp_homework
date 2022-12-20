import { useContext, useEffect, useState } from "react";
import uuid from 'react-uuid';
import { UsersContext } from "../../../context/UsersContext";


export default function WIFIcode({ ruIndex, userindex, fieldindex, wifiCode }) {

    const { setWIFICode } = useContext(UsersContext);

    const wfCodes = [
        { val: '0', name: 'BCC' },
        { val: '1', name: 'LDPC' }
    ];
    useEffect(() => {
        console.log('wifiCode:', wifiCode);
        // get the matched item from the list above
        const [item] = wfCodes.filter(item => item.val === wifiCode);
        console.log(item.val);
        setSelected(item);
    }, [wifiCode]);

    const [selected, setSelected] = useState('BCC');
    const [showList, setShowList] = useState(false);

    const handleClickList = () => {
        setShowList(!showList);
    }
    const handleClickItem = (e) => {
        console.log('adam');
        // console.dir(e.target.attributes['valNum'].value);
        const itemVal = e.target.attributes['valNum'].value;
        console.log(`${itemVal}`);
        setShowList(!showList);
        setWIFICode(ruIndex, itemVal); // sended ru index and wifi code value
    }

    return (
        <div className="rTableCell noBorder paramCell116 custom-select">
            <div className="select-selected" userindex={userindex} fieldindex={fieldindex} onClick={handleClickList}>{selected.name}</div>
            <span className="arrow-bg"></span>
            {showList && <div className="select-items">
                <div key={uuid()} valnum={0} onClick={handleClickItem}>{'BCC'}</div>
                <div key={uuid()} valnum={1} onClick={handleClickItem}>{'LDPC'}</div>
            </div>}
        </div>
    );
}