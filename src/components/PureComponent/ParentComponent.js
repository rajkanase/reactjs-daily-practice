import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComponent from '../MemoComponent/MemoComp';

class ParentComp extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Raj'
        };
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Raj'
            })
        }, 2000);
    }

    render() {
        console.log('*************Parent Component********************');
        return (
            <div>
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp