import React, { useState } from 'react'
import './List.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

function List({task,index,handleDeleteTodo,handleToggleTodo,edittodo}) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <div className="main">
                <Checkbox {...label}
                size="large" color="secondary" onClick={() => handleToggleTodo(index)}/>

                <h3 style= {{textDecoration :  task.comp ?"line-through":"" }}>{task.task}</h3>
                <button className='btn' onClick={()=>edittodo(index)}><EditIcon className='edit' /></button>
                <button className='btn'onClick={() => handleDeleteTodo(index)}><DeleteIcon className='delete' /></button>
            </div>
        </>
    )
}

export default List