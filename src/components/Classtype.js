import React from 'react';

class ClassType extends React.Component {
    render() {
        console.log('classtype props', this.props);
        return (
            <div>
                <h1>Hello {this.props.name} {this.props.surname}!</h1>
                {this.props.children}
            </div>
        )
    }
}

export default ClassType