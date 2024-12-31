import React, { useState } from 'react'
import { MdAutoDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import SearchTodo from './SearchTodo';
import TodoList from './TodoList';
import ClearTodo from './ClearTodo';

const TodoData = () => {
    let [todos, setTodos] = useState([])
    let [data, setData] = useState('')
    let [editIdx, setEditIdx] = useState(null);
    let [search, setSearch] = useState('');
    const [updateData, setUpdateData] = useState({ id: null, text: '', finish: false });

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
        if (editIdx === null) {
            const newData = {
                id: new Date().getTime(),
                text: data,
                finish: false
            }
            // console.log(newData)
            setTodos([newData, ...todos]);
        } else {
            let updateTodo = todos.map((todo, idx) => idx === editIdx ? { ...todo, text: data } : todo)
            // console.log(updateTodo)
            setTodos(updateTodo)
            setEditIdx(null);
        }
        setData('')
        // console.log(todos)
    }

    let handleUpdate = (id) => {
        console.log(id);
        let updateTodo = todos.map((todo) => todo.id == id ? { ...todo, text: updateData.text } : todo)
        // console.log(updateTodo)
        setTodos(updateTodo)
        setEditIdx(null);
        setUpdateData({ id: null, text: null, finish: false })
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

    const handleEdit = (idx) => {
        setEditIdx(idx);
        setData(todos[idx].text);
    };

    const clearFinish = () => {
        const activeTodos = todos.filter((todo) => !todo.finish);
        setTodos(activeTodos);
    };

    let toggleFinish = (idx) => {
        let updateTodo = todos.map((todo, i) => i === idx ? { ...todo, finish: !todo.finish } : todo);
        setTodos(updateTodo)
    };

    function handleSearchClick() {
        console.log('Searching for:', search);
    }

    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    );

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        // <div className='max-w-full text-center m-auto font-sans' >
        <div className='todo-container'>
            <h3 className='todo-header'>Todo APP</h3>

            <form onSubmit={handleSubmit} className='todo-submit'>
                <input type='text' className='todo-input' placeholder='write your data here' value={data} onChange={handleChange} />
                <button type="submit" className='todo-button-add'> add</button>
            </form>

            <SearchTodo
                data={search}
                handleInputChange={handleInputChange}
                handleSearchClick={handleSearchClick}
            />

            {search ? (filteredTodos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))) : ('')
            }

            <TodoList
                todos={todos}
                updateData={updateData}
                setUpdateData={setUpdateData}
                toggleFinish={toggleFinish}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
            />
            <ClearTodo todos={todos} clearFinish={clearFinish} />
        </div>
    )
}

export default TodoData;
