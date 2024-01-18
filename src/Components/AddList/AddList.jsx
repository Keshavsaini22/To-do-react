import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import './AddList.css'
const AddList = ({ addto }) => {
    const [value, setvalue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() != "") {
            addto(value)
            setvalue("")
        }

    }
    return (

        <form className='main' onSubmit={handleSubmit}>
            <input type="text" placeholder='Add text here in this list' value={value} onChange={(e) => setvalue(e.target.value)} />
            <button type='submit' className='btn'><AddIcon /></button>
        </form>
    )
}

export default AddList