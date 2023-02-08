import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditDialog({open,dialogHandler,todo,todoEdit}) {
 const [editedText,setEditedText]= React.useState(todo.text)

 const TextHandle =()=>{
  todoEdit(todo.id,editedText)
  dialogHandler()
 }
   return (
  
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        //onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
      fullWidth
      >
        <DialogTitle>{"Editando Tarefa"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <TextField  defaultValue={editedText} fullWidth  onChange={(e)=>setEditedText(e.target.value)}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler} >Cancelar</Button>
          <Button  onClick={TextHandle} >Ok</Button>
        </DialogActions>
      </Dialog>
  )
}
