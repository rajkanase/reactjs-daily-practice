import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    // in pure components we have to deal with shouldComponentUpdate method which allows render method to invoke on state/props changes
    render() {
        console.log('*************Pure Component********************');
        return (
            <h1>Pure Component {this.props.name}</h1>
        )
    }
}

export default PureComp