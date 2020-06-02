import React from 'react'

const Header = (props) => {
    return (
        <div className="Header">
            You have {props.numTodo} Todos
        </div>
    )
}
export default Header
