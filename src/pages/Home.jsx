import { Container, List } from "@mui/material";
import React from "react";
import { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";


 export default function Home(){
  const[todos,setTodos]=useState ([])

   const  todoAdd =(todo) => {
    setTodos([...todos,todo])
    document.getElementById("outlined-basic").value=null

  }

 const todoDelete = (id) =>{
  var filtered =todos.filter((todo) => todo.id!==id)
  setTodos(filtered)  
 }

 const todoEdit =(id, editedText)=> { 
  var todosArray = [...todos]

   for(var i in todosArray){
    if(todosArray[i].id==id){
      todosArray[i].text=editedText
    }
   }
   }

  
  return(
   
    
<Container maxWidth='xs' style={{marginTop:'15px'}}>
      <Form todoAdd={todoAdd}/>
      <List  sx={{ bgcolor: 'background.paper',marginTop:'10px' }}>
        {todos.map((todo)=>(
         <TodoItem todoEdit={todoEdit} todo={todo} todoDelete={todoDelete}/>   
        ))} 
     
      </List>
    </Container>
    
  )
 }

