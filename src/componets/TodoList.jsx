import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdAutoDelete } from 'react-icons/md'

const TodoList = ({ todos, toggleFinish, handleDelete, handleEdit, updateData, setUpdateData, handleUpdate }) => {
    // console.log(updateData)
    return (
        <div className='todo-list'>
            {
                todos.length !== 0 ? todos.map((item, idx) => (
                    updateData.id === item.id ?
                        <form className='todo-item' onSubmit={() => handleUpdate(updateData.id)}>
                            <input type='text' placeholder='update' value={updateData.text} onChange={(e) => setUpdateData({ ...updateData, text: e.target.value })} className='todo-edit' />
                            <button type='submit' className='todo-button-add'>Update</button>
                        </form> : <div className='todo-item' key={item.id}>
                            <input
                                type="checkbox"
                                finish={item.finish}
                                onChange={() => toggleFinish(item.id)}
                            />
                            <span className='todo-text' style={{ color: item.finish ? '#979393' : 'black', textDecoration: item.finish ? 'line-through' : 'none' }}
                            >
                                {item.text}
                            </span>
                            <button className='todo-button-delete' onClick={() => handleDelete(idx)}><MdAutoDelete /></button>
                            <button className='todo-button-edit' onClick={() => setUpdateData({ id: item.id, text: item.text, finish: item.finish })}><CiEdit /></button>
                        </div>
                )) : <h4> No data is entered</h4>
            }
        </div>
    )
}

export default TodoList
