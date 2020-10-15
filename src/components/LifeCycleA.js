import React, { Component } from 'react';

class LifeCycleA extends Component {
    a = 10;
    constructor(props) {
        super();
        this.state = {
            name: 'constructor'
        }
        console.log(props.name);
        console.log('Lifecycle A contsructor');
        console.log(this.a);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount');
        // this.setState({
        //     name: 'fromMount'
        // })
        this.a = 20
    }

    setStateHandler = () => {
        console.log('lifecycle A setStateHandler');
        console.log(this.props.name);
        this.setState({
            name: this.props.name
        })
        console.log(this.state.name);
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycle A getSnapshotBeforeUpdate');
        return prevState;
    }

    shouldComponentUpdate(){
        console.log('lifecycle A shouldComponentUpdate');
        return false;
    }

    componentDidUpdate(){
        console.log('lifecycle A compoentDidUpdate');
    }

    render() {
        console.log('Lyfecycle A render');
        return (
            <div>
                LifeCycleA - {this.state.name} {this.a}
                <button onClick={this.setStateHandler}>Click ME</button>
            </div>
        )
    }
}

export default LifeCycleA;