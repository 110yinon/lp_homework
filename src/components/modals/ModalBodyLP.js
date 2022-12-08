import RTableRow from "../table/RTableRow";
import UsersTable from "../usersTable/UsersTable";

export default function ModalBodyLP() {
    return (
        <div className="modal-body-lp" style={{ maxHeight: '50vh' }}>
            <div id="rus-table" className="rTable">
                <RTableRow ru={''} tone={26}/>
                <RTableRow ru={''} tone={52}/>
                <RTableRow ru={''} tone={106}/>
                <RTableRow ru={''} tone={242}/>
                <RTableRow ru={'ru40'} tone={484}/>
                <RTableRow ru={'ru80'} tone={996}/>
                {/* <RTableRow cellNum={37} rowNum={0}/> */}
                {/* <div className="rTableRow">
                    <div className="rTableCell rTable26Tone ru20 ruavilable">0</div>
                    <div className="rTableCell rTable26Tone ru20 ruavilable">1</div>
                    <div className="rTableCell rTable26Tone ru20 ruavilable">2</div>
                    <div className="rTableCell rTable26Tone ru20 ruavilable">3</div>
                    <div className="rTableCell rTable26Tone ru20 ruavilable">4</div>
                    <div className="rTableCell rTable26Tone ru20 ruavilable">5</div>
                    <div className="rTableCell rTable26Tone ru20 ruavilable">6</div>
                    <div className="rTableCell rTable26Tone ru20 ruavilable">7</div>
                    <div className="rTableCell rTable26Tone ru20 ruavilable">8</div>
                    <div className="rTableCell rTable26Tone ru40 ruavilable">9</div>
                    <div className="rTableCell rTable26Tone ru40 ruavilable">10</div>
                    <div className="rTableCell rTable26Tone ru40 ruavilable">11</div>
                    <div className="rTableCell rTable26Tone ru40 ruavilable">12</div>
                    <div className="rTableCell rTable26Tone ru40 ruavilable">13</div>
                    <div className="rTableCell rTable26Tone ru40 ruavilable">14</div>
                    <div className="rTableCell rTable26Tone ru40 ruavilable">15</div>
                    <div className="rTableCell rTable26Tone ru40 ruavilable">16</div>
                    <div className="rTableCell rTable26Tone ru40 ruavilable">17</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">18</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">19</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">20</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">21</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">22</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">23</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">24</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">25</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">26</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">27</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">28</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">29</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">30</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">31</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">32</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">33</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">34</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">35</div>
                    <div className="rTableCell rTable26Tone ru80 ruavilable">36</div>
                </div> */}
                {/* <div className="rTableRow">
                    <div className="rTableCell rTable52Tone ru20 ruavilable">37</div>
                    <div className="rTableCell rTable52Tone ru20 ruavilable">38</div>
                    <div className="rTableCell rTable26Tone ru20">X</div>
                    <div className="rTableCell rTable52Tone ru20 ruavilable">39</div>
                    <div className="rTableCell rTable52Tone ru20 ruavilable">40</div>
                    <div className="rTableCell rTable52Tone ru40 ruavilable">41</div>
                    <div className="rTableCell rTable52Tone ru40 ruavilable">42</div>
                    <div className="rTableCell rTable26Tone ru40">X</div>
                    <div className="rTableCell rTable52Tone ru40 ruavilable">43</div>
                    <div className="rTableCell rTable52Tone ru40 ruavilable">44</div>
                    <div className="rTableCell rTable26Tone ru80">X</div>
                    <div className="rTableCell rTable52Tone ru80 ruavilable">45</div>
                    <div className="rTableCell rTable52Tone ru80 ruavilable">46</div>
                    <div className="rTableCell rTable26Tone ru80">X</div>
                    <div className="rTableCell rTable52Tone ru80 ruavilable">47</div>
                    <div className="rTableCell rTable52Tone ru80 ruavilable">48</div>
                    <div className="rTableCell rTable52Tone ru80 ruavilable">49</div>
                    <div className="rTableCell rTable52Tone ru80 ruavilable">50</div>
                    <div className="rTableCell rTable26Tone ru80">X</div>
                    <div className="rTableCell rTable52Tone ru80 ruavilable">51</div>
                    <div className="rTableCell rTable52Tone ru80 ruavilable">52</div>
                </div> */}
                {/* <div className="rTableRow">
                    <div className="rTableCell rTable106Tone ru20 ruavilable">53</div>
                    <div className="rTableCell rTable26Tone ru20">X</div>
                    <div className="rTableCell rTable106Tone ru20 ruavilable">54</div>
                    <div className="rTableCell rTable106Tone ru40 ruavilable">55</div>
                    <div className="rTableCell rTable26Tone ru40">X</div>
                    <div className="rTableCell rTable106Tone ru40 ruavilable">56</div>
                    <div className="rTableCell rTable26Tone ru80">X</div>
                    <div className="rTableCell rTable106Tone ru80 ruavilable">57</div>
                    <div className="rTableCell rTable26Tone ru80 ">X</div>
                    <div className="rTableCell rTable106Tone ru80 ruavilable">58</div>
                    <div className="rTableCell rTable106Tone ru80 ruavilable">59</div>
                    <div className="rTableCell rTable26Tone ru80">X</div>
                    <div className="rTableCell rTable106Tone ru80 ruavilable">60</div>
                </div> */}
                {/* <div className="rTableRow">
                    <div className="rTableCell rTable242Tone ru20 ruavilable">61</div>
                    <div className="rTableCell rTable242Tone ru40 ruavilable">62</div>
                    <div className="rTableCell rTable26Tone ru80">X</div>
                    <div className="rTableCell rTable242Tone ru80 ruavilable">63</div>
                    <div className="rTableCell rTable242Tone ru80 ruavilable">64</div>
                </div> */}
                {/* <div className="rTableRow ru40">
                    <div className="rTableCell rTable484Tone ru40 ruavilable">65</div>
                    <div className="rTableCell rTable26Tone ru80">X</div>
                    <div className="rTableCell rTable484Tone ru80 ruavilable">66</div>
                </div> */}
                {/* <div className="rTableRow ru80">
                    <div className="rTableCell rTable996Tone ru80 ruavilable">67</div>
                </div> */}
            </div>
            <div className="rus-title">Users:</div>
            <UsersTable/>
            {/* <div id="users-table" className="rTable">
                <div className="rTableHeading">
                    <div className="rTableHead paramCell56">User #</div>
                    <div className="rTableHead paramCell70">RU Index</div>
                    <div className="rTableHead paramCell116">Data Rate</div>
                    <div className="rTableHead paramCell70">DCM</div>
                    <div className="rTableHead paramCell116">WIFI Code</div>
                    <div className="rTableHead paramCell70">nSS</div>
                    <div className="rTableHead paramCell70">sSS</div>
                    <div className="rTableHead paramCell116">Delete User</div>
                </div>
                <div className="rTableBody"></div>
            </div> */}
        </div>
    );
}
