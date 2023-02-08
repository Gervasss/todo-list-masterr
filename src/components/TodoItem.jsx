import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDialog from './EditDialog';
import { Paper } from '@mui/material';


export default function TodoItem({todo,todoDelete,todoEdit}) {
  const [checked, setChecked] = React.useState([0]);

  const [openDialog,setopenDialog]=React.useState(false)


  const  dialogHandler =()=>{
    setopenDialog(!openDialog)

  }


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
<> 
    <EditDialog  todoEdit={todoEdit} open={openDialog} dialogHandler={dialogHandler} todo={todo}/>
    <Paper style={{ padding:"o.5em 0em"}}/>
    <ListItem
             
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={()=>todoDelete(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disablePadding/>
              </ListItemIcon>
              <ListItemText primary={todo.text} onClick={()=> setopenDialog(true)}/>
            </ListItemButton>

          </ListItem>
          </>
  )
 
}
