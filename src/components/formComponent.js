import React, { Component } from 'react';

class FormComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            comment: '',
            skill: ''
        };
    }

    onUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    onCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    onSkillChange = event => {
        this.setState({
            skill: event.target.value
        })
    }

    onFormSubmit = () => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.skill}`);

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.onUsernameChange} />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.onCommentChange}></textarea>
                </div>
                <div>
                    <label>Skill</label>
                    <select onChange={this.onSkillChange}>
                        <option>Angular</option>
                        <option>Node JS</option>
                        <option>React</option>
                        <option>Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default FormComponent;