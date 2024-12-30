import React, { useState } from 'react'

const TodoData = () => {
    const [todos, setTodos] = useState([])
    let [data, setData] = useState('')

    // const db = [
    //     {
    //         id: 1,
    //         name: "asd",
    //         add: "prt"
    //     },

    //     {
    //         id: 2,
    //         name: "zxc",
    //         add: "sadf"
    //     }
    // ]

    function handleChange(e) {
        setData(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();             // to prevent from reloading and other default featrues
        setTodos([...todos, data]);     // destructring is done so that when the next daat will be entered so that it won't merge with the previous one else it might get merge with it.
        setData('')                     // make the input filed empty after every time entering the data.
    }

    const handleDelete = (idx) => {
        const newTodos = [...todos];
        newTodos.splice(idx, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <h3 className='todo-text'>todo data</h3>
            <div className='todo-item todo-card' >
                <form onSubmit={handleSubmit}>
                    <input type='text' className='todo-input' placeholder='write your data here' value={data} onChange={handleChange} />
                    <button className='todo-button'> Add</button>
                </form>

                {
                    todos.map((item) => (
                        <div className='todo-card'>
                            <span>
                                {item}
                                <button className='todo-button' onClick={handleDelete}>Delete</button>
                                <button className='todo-button'>Edit</button>
                                <button className='todo-button'>Update</button>
                            </span>


                            {/* <span>{item.id}</span>
                            <span>{item.name}</span>
                            <span>{item.add}</span> */}
                            {/* <input type='text' className='todo-input' placeholder='write your data here' value={data} onChange={handleChange} />
                            <button className='todo-button' onClick={handleSubmit}>Add</button>
                            <button className='todo-button'>Delete</button>
                            <button className='todo-button'>Edit</button> */}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default TodoData
