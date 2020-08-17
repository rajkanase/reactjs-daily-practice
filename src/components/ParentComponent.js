import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    showAlert = (sender) => {
        alert(`Call to parent component from ${sender}`);
    }

    render() {
        return (
            <div>
                <ChildComponent clickHandler = {this.showAlert}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent;