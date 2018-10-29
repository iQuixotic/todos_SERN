import React from "react";
import './style.css';

const Table = (props) => {
    return(
        <div className='todo-table'>
            <table>
                <tr>
                    <th> </th>
                    <th>Action</th>
                </tr>
                {props.children}
            </table>
        </div>
    );
}

export default Table;