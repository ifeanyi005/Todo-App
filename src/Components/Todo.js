import React from 'react'

const Todo = (props) => {



    return (
        <div className="line">
            {props.content}
            <button className="buttonStyle" onClick={() => { props.onDelete(props.id) }}>X</button>

        </div>
    )
}

export default Todo
