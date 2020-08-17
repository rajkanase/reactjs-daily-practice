import React, { Component } from 'react';
import Person from './Person';

class ListRender extends Component {

    constructor() {
        super();

    }

    render() {
        const persons = [
            { id: 1, name: 'Raj', age: '20', skill: 'Angular' },
            { id: 2, name: 'Hrishi', age: '21', skill: 'React' },
            { id: 3, name: 'Vaibhav', age: '22', skill: 'Node' },
            { id: 4, name: 'Omkar', age: '23', skill: 'Python' }
        ]
        const personsArray = persons.map((person, index) => {
            return <Person key={index} abc={index} personObj={person}></Person>
        })
        return (
            <div>{personsArray}</div>
        )
    }
}


export default ListRender;