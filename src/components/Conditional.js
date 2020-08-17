import React, { Component } from 'react';

class Conditional extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }

        setInterval(() => {
            this.setState({
                isLoggedIn: !this.state.isLoggedIn
            })
        }, 2000);
    }

    render() {
        // normal if / else
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Raj!
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             Welcome Guest!
        //         </div>
        //     )
        // }

        // assign element to variables
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Raj!</div>
        // } else {
        //     message = <div>Welcome Guest!</div>
        // }

        // return (
        //     <div>{message}</div>
        // )

        // js ternary operator

        // return this.state.isLoggedIn ?
        //     <div>Welcome Raj!</div> :
        //     <div>Welcome Guest!</div>

        // js && statement for only if

        return this.state.isLoggedIn && <div>Welcome Raj!</div>
    }

}

export default Conditional;