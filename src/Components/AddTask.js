import React, { Component } from 'react'

export class AddTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newTask: ''
        }
    }

    handleSubmit(e){
        e.preventDefault(e)
        if (this.state.newTask === '') return;
        this.props.onSubmit(this.state.newTask);
        this.setState({
            newTask: ''
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter new todo" value={this.state.newTask}
                        onChange={(e) => this.setState({ newTask: e.target.value })} />
                    <button type="submit">Add New</button>
                </form>
            </div>
        )
    }
}

export default AddTask
