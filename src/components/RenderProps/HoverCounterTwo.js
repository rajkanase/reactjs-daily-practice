import React, { Component } from 'react';

class HoverCounterTwo extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     };
    // }

    // incrementCounter = () => {
    //     this.setState(prev => {
    //         return { count: prev.count + 1 }
    //     })
    // }

    render() {
        const { count, incrementCounter } = this.props;
        return (
            <button onMouseEnter={incrementCounter}>
                Hover {count} times
            </button>
        )
    }
}

export default HoverCounterTwo;