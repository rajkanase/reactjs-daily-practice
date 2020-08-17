import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increaseCount() {
        console.log('fun call');
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('this.state.count', this.state.count)
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.count}
                </div>
                <button onClick={() => this.increaseCount()}>Increment</button>
            </div>
        )
    }
}

export default Counter;