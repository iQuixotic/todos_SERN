import * as React from "react";
// import {Icon} from 'react-fa';
import './style.css';

const NavItems = (props) => {
    return (
        <nav className='nav-items'>
        Todo List
             {/* <li>To Do<a href={props.link1}>{props.children}</a></li>
             <li>History<a href={props.link2}>{props.children}</a></li> */}
        </nav>
    );
}

export default NavItems;