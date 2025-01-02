import React from 'react'

const SearchTodo = ({ data, setSearch }) => {
    return <>
        <div className="todo-list">
            <input value={data} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="search your data here..." className="todo-input-search" />
            <button className="todo-button-search">Search</button>
        </div> <br />
    </>
}

export default SearchTodo
