import React, { useState } from 'react'

const TodoData = () => {
    const [todos, setTodos] = useState([])
    let [data, setData] = useState('')

    // const todos = [
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
        // console.log(e.target.value)
        setData(e.target.value);
    }

    const handleSubmit = (e) => {
        // console.log(data)
        e.preventDefault();
        const newData = {
            id: new Date().getTime(),
            text: data,
            completed: false
        }
        console.log(newData)
        setTodos([...todos, newData]);
        setData('')
        // console.log(todos)
    }


    const handleDelete = (idx) => {
        const newTodos = [...todos];
        newTodos.splice(idx, 1);
        // newTodos.filter((idx) => {
        //     newTodos.id = idx;
        // })
        console.log(newTodos);
        setTodos(newTodos);
    };

    return (
        <>
            <h3 className='todo-text'>Todo APP</h3>
            <div className='todo-item todo-card' >
                <form onSubmit={handleSubmit}>
                    <input type='text' className='todo-input' placeholder='write your data here' value={data} onChange={handleChange} />
                    <button className='todo-button'> Add</button>
                </form>

                {
                    todos.length !== 0 ? todos.map((item) => (
                        <div className='todo-card todo-item' key={item.id}>
                            <span>
                                {item.text}
                                <button className='todo-button' onClick={handleDelete}>Delete</button>
                                <button className='todo-button'>Edit</button>
                            </span>

                            {/* <span>{item.id}</span>
                            <span>{item.name}</span>
                            <span>{item.add}</span>
                            <input type='text' className='todo-input' placeholder='write your data here' value={data} onChange={handleChange} />
                            <button className='todo-button' onClick={handleSubmit}>Add</button>
                            <button className='todo-button'>Delete</button>
                            <button className='todo-button'>Edit</button> */}
                        </div>
                    )) : <h1> No data is entered</h1>
                }
            </div>
        </>
    )
}

export default TodoData;