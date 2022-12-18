import '../../table/RTableCell.css';

export default function RUindex({ ruIndex, userindex, fieldindex }) {
    return (
        <div className="rTableCell noBorder paramCell56">
            <span userindex={userindex} fieldindex={fieldindex}>{ruIndex}</span>
        </div>
    );
}