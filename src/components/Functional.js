import React from 'react';

// function Functional(){
//     return (
//         <h1>Hello Raj!</h1>
//     )
// }

export const Functional = (props) => {
    console.log('props', props);
    return (
        <div>
            <h1>Hello {props.name} {props.surname}!</h1>
            {props.children}
        </div>
    )
}

// export default Functional