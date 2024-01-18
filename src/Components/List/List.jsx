import React, { useState } from 'react'
import './List.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

function List({task,index,handleDeleteTodo,handleToggleTodo,editTodo}) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <div className="main">
                <Checkbox {...label}
                size="large" color="secondary" onClick={() => handleToggleTodo(task.id)}/>

                <h3 style= {{textDecoration :  task.completed ?"line-through":"" }}>{task.task}</h3>
                <button className='btn' onClick={()=>editTodo(task.id)}><EditIcon className='edit' /></button>
                <button className='btn'onClick={() => handleDeleteTodo(task.id)}><DeleteIcon className='delete' /></button>
            </div>
        </>
    )
}

export default List