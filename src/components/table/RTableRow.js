
export default function RTableRow({ cellNumScale, rowNum }) {
    const length = cellNumScale[1] - cellNumScale[0];//36-0=36
    const arr1 = [...Array(length + 1)];//37
    

    return (
        <div className="rTableRow kuni">
            {
                arr1.map((element, index) => {
                    return <div className="rTableCell rTable26Tone ru20 ruavilable" key={index + cellNumScale[0]}>{index + cellNumScale[0]}</div>                    
                })
            }
        </div>
    );
}
