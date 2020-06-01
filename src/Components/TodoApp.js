import React, { Component } from 'react'
import Header from './Header'

export class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: ['Task 1', 'Task 2', 'Task 3']
        }
    }

    render() {
        return (
            <div>
                <Header numTodo={this.state.tasks.length} />
            </div>
        )
    }
}

export default TodoApp
