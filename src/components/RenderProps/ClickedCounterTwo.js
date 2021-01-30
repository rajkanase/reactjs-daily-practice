import React, { Component } from 'react';

class ClickedCounterTwo extends Component {
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
            <button onClick={incrementCounter}>
                Clicked {count} times
            </button>
        )
    }
}

export default ClickedCounterTwo;