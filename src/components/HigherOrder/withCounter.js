import React, { Component } from 'react';

const updatedComponent = OriginalComponent => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {
                count: 0
            };
        }

        incrementCount = () => {
            this.setState(prev => {
                return { count: prev.count + 1 }
            })
        }

        render() {
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
        }

    }
    return NewComponent;
}

export default updatedComponent;