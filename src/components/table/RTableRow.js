import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import RTableCell from './RTableCell';

export default function RTableRow({ tone, ruAtt }) {
    
    const [arr, setArr] = useState([]);    
    useEffect(() => {
        switch (tone) {
            case 26:
                setArr([...Array(37)].map((e, i) => i)); // OR-> [0,1,2 ... 36]
                break;
            case 52:
                setArr([37, 38, 'X', 39, 40, 41, 42, 'X', 43, 44, 'X', 45, 46, 'X', 47, 48, 49, 50, 'X', 51, 52]);
                break;
            case 106:
                setArr([53, 'X', 54, 55, 'X', 56, 'X', 57, 'X', 58, 59, 'X', 60]);
                break;
            case 242:
                setArr([61, 62, 'X', 63, 64]);
                break;
            case 484:
                setArr([65, 'X', 66]);
                break;
            case 996:
                setArr([67]);
                break;
        }
    }, []);


    return (
        <div className={`rTableRow ${ruAtt}`}>
            {
                arr.map(element => {
                    return <RTableCell element={element} tone={tone} key={uuid()}/>
                })
            }
        </div>
    );
}
