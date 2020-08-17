import React from 'react';
// import './styles.css';
import {primary} from './styles.module.css';

const heading = {
    fontSize: '60px',
    color: 'blue'
};

function Stylesheet() {
    return (
        <div>
            {/* stylesheet */}
            <h1 className="fntStyle">Welcome React JS</h1>
            {/* inner style */}
            <h1 style={heading}>Welcome React JS</h1>
            {/* from styles module */}
            <h1 className={primary}>Welcome React JS</h1>
        </div>
    )
}

export default Stylesheet