import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import './Edit.css'
const Edit = ({ edittodo,task,index }) => {
    const [value, setvalue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() != "") {
            edittodo(value,task[index])
            setvalue("")
        }

    }
    return (

        <form className='main' onSubmit={handleSubmit}>
            <input type="text" placeholder='Add text here in this list' value={value} onChange={(e) => setvalue(e.target.value)} />
            <button type='submit' className='btn'><UpgradeIcon /></button>
        </form>
    )
}

export default Edit