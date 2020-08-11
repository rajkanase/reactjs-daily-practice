import React from 'react';

class StateExample extends React.Component {

    constructor(){
        super();
        this.state = {
            messsage: 'Welcome to channel guys.'
        };
    }

    changeState(){
        this.setState({
            messsage: 'Thanks for subscribing channel guys.'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.messsage}</h1>
                <button onClick = { () => this.changeState()}>Subscribe</button>
            </div>
        )
    }

}

export default StateExample;