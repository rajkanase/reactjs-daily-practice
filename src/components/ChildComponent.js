import React, { Component } from 'react';

const ChildComponent = (props) => {
    return (
        <button onClick={() => props.clickHandler('Raj')}>
            Call Parent
        </button>
    )
}

export default ChildComponent;