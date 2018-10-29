import React from "react";
import './style.css';

const BackDrop = (props) => {
    return(
        <div className='backdrop'>
            {props.children}
        </div>
    );
}

export default BackDrop;