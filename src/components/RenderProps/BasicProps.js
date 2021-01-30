import React, { Component } from "react";

class BasicProps extends Component {

    render() {
        // const { name } = this.props;
        return (
            <div>
                {this.props.name(false)}
            </div>
        )
    }
}

export default BasicProps;