import RTableRow from "../table/RTableRow";
import UsersTable from "../usersTable/UsersTable";

export default function ModalBodyLP() {
    return (
        <div className="modal-body-lp" style={{ maxHeight: '50vh' }}>
            <div id="rus-table" className="rTable">
                <RTableRow ruAtt={''} tone={26}/>
                <RTableRow ruAtt={''} tone={52}/>
                <RTableRow ruAtt={''} tone={106}/>
                <RTableRow ruAtt={''} tone={242}/>
                <RTableRow ruAtt={'ru40'} tone={484}/>
                <RTableRow ruAtt={'ru80'} tone={996}/>                
            </div>
            <div className="rus-title">Users:</div>
            <UsersTable/>
        </div>
    );
}
