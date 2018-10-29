import * as React from "react";
import { NavItems } from '../../../components';
// import {Icon} from 'react-fa';
import './style.css';

const Toolbar = (props) => {
    return (
        <nav className='toolbar'>
            <ul>
                <NavItems
                    link1='home'
                    link2='history' />
            </ul>
        </nav>
    );
}

export default Toolbar;