import * as React from "react";
import { NavItems } from '../../../components';
import './style.css';

// will be used for mobile devices
const Sidedrawer = () => {
    return ( 
        <div id='SD' className='Sidedrawer' >
            <nav>
            <ul>
                <NavItems
                    link1='home'
                    link2='history' />
            </ul>
            </nav>
        </div>
    );
}

export default Sidedrawer;