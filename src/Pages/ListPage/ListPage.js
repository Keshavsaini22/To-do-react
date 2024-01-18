import React, { useState } from 'react'
import AddList from '../../Components/AddList/AddList'
import List from '../../Components/List/List'
import './ListPage.css'
import {v4 as uuidv4} from 'uuid';
import Edit from '../../Components/Edit/Edit';
uuidv4();
 
function ListPage() {
  const [todos,setTodos]=useState([])
  const addto= (todo) =>{
    setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }
  const handleDeleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const edittask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <>
    <div className='container'>
        <AddList addto={addto}/>
        {todos.map((todo,index)=>(

          todo.isEditing?(<Edit edittodo={edittask} task={todo} index={index}/>):

        <List task={todo} key={index} index={index} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} editTodo={editTodo}/>))}
    </div>
    </>
  )
}

export default ListPage


 // const deleteTodo = (id) => settodos(todos.filter((todo) => todo.id !== id));


  // const toggleComplete = (id) => {
  //   settodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // }