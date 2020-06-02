import React, { Component } from 'react'
import Header from './Header'
import Todolist from './TodoList'

export class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: ['Task 1', 'Task 2', 'Task 3']
        }
    }
    handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({ tasks: newArr });
    }

    render() {
        return (
            <div>
                <Header numTodo={this.state.tasks.length} />
                <Todolist tasks={this.state.tasks} onDelete={this.handleDelete} />
            </div>
        )
    }
}

export default TodoApp
