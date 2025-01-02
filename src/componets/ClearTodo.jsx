import React from 'react'

const ClearTodo = ({ todos, clearFinish }) => {
    return (
        <div className='todo-text'>
            {todos.some((todo) => todo.finish) && (
                <button className="todo-button-clear" onClick={clearFinish}>
                    Clear Finish Task
                </button>
            )}
        </div>
    )
}

export default ClearTodo
