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
    setTodos([...todos,{task:todo,comp:false,isEditing:false}])
    console.log(todos)
  }
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos?.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    console.log(index)

    const newTodos = [...todos];
    newTodos[index].comp = !todos[index].comp;
    setTodos(newTodos);
  };

  const edittodo = (index) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo[index] === index ? { ...todo, isEditing: !todo.isEditing } : todo
    //   )
    // );
    const newTodos = [...todos];
    newTodos[index].isEditing = !todos[index].isEditing;
    setTodos(newTodos);
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

        <List task={todo} key={index} index={index} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} edittodo={edittodo}/>))}
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