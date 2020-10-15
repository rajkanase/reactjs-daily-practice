import React, { Component } from 'react';

class RefComp extends Component {
    constructor() {
        super()
        this.inpRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.inpRef);
        this.inpRef.current.focus();
    }

    clickHandler = () => {
        console.log('clicked--');
        alert(this.inpRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inpRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefComp;