import React, { Component } from 'react';
import updatedComponent from './withCounter';

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <button onMouseEnter={incrementCount}>
                Hover {count} times
            </button>
        )
    }
}

export default updatedComponent(HoverCounter);