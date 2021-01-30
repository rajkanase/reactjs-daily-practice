import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    incrementCounter = () => {
        this.setState(prev => {
            return { count: prev.count + 1 }
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCounter)}
            </div>
        )
    }
}

export default Counter;