import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    const todos = props.tasks.map(
        (todo, index) => { return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} /> }
    )

    return (
        <React.Fragment>
            {todos}
        </React.Fragment>
    )
}

export default TodoList
