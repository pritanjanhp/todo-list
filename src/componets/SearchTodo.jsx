import React from 'react'

const SearchTodo = ({ data, handleInputChange, handleSearchClick }) => {
    return <>
        <div className="todo-list">
            <input value={data} onChange={handleInputChange} type="text" placeholder="search your data here..." className="todo-input-search" />
            <button onClick={handleSearchClick} className="todo-button-search">Search</button>
        </div> <br />
    </>
}

export default SearchTodo
