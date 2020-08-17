import React from 'react';

const Person = ({personObj, abc}) => {
    console.log('personObj', personObj);
    console.log('abc', abc);
    return (
        <div>
            <h1>{abc}. I am {personObj.name}. I am {personObj.age} & I know {personObj.skill}</h1>
        </div>
    )    
}

export default Person;