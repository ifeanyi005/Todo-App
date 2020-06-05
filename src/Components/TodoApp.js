import React, { Component } from 'react'
import Header from './Header'
import Todolist from './TodoList'
import AddTask from './AddTask'

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

    handleSubmit = task => {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    render() {
        return (
            <div>
                <Header numTodo={this.state.tasks.length} />
                <Todolist tasks={this.state.tasks} onDelete={this.handleDelete} />
                <AddTask onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default TodoApp
