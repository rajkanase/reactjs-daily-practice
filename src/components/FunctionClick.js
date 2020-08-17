import React from 'react';


const functionClick = () => {

    const clickHandler = () => {
        console.log('Clicked');
    }

    return (
        <div>
            <button onClick={clickHandler}>
                Click Me
            </button>
        </div>
    )
}

export default functionClick;