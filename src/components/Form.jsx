import React, { useState } from "react";
import { TextField,Button, Paper, useThemeProps } from "@mui/material";
import { flexbox } from "@mui/system";
import { todoAdd } from '../pages/Home';


export default function Form({todoAdd}){
  const [text,setText]= useState(null)
  const [id,setId]=useState(0)

  const todoCreate =(text) =>{
     const todoObj = {text: text,id:id}
     setId(id + 1)
      todoAdd(todoObj)
  }


   return(

     <Paper style={{ padding:'10px'}}>
      <div style={{ display:'flex',justfyContent:'center'}}>
      <TextField id="outlined-basic" 
      label="Tarefa" 
      variant="outlined" 
      onChange={(e) => setText(e.target.value)} 
      fullWidth />
      <Button variant="text" onClick={()=> todoCreate(text)}>
        add
      </Button>
      </div>
    </Paper>

   )
  

}