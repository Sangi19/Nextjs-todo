
import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import moment from 'moment/moment'
import { db } from '../firebase';
import { deleteDoc, doc,serverTimestamp,updateDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import Switch from '@mui/material/Switch';


const Todo = ({id,title,timestamp,detail,favorites}) => {
 
  const {showAlert, setTodo}=useContext(TodoContext)

  const deleteTodo=async(id,e) => {
  e.stopPropagation();
  const docRef=doc(db,"todos",id)
  await deleteDoc(docRef)
  showAlert('error',`Todo with id ${id} deleted successfully`);
  }

  const [checked, setChecked] = useState(favorites);
    
    const handleChange = (event) => {
      setChecked(event.target.checked);
      console.log("value updated to ", event.target.checked)
      const docRef= doc(db, "todos",id)
      const todoUpdated= {timestamp:serverTimestamp(), favorites: event.target.checked}
      updateDoc(docRef,todoUpdated)
    }

  return (

    <ListItem 
    sx={{mt:3, boxShadow:3}}
    style={{background:'#FAFAFA'}}
    secondaryAction={
      <>
      <Switch  id="switch" checked={checked}
      onChange={handleChange}  
      inputProps={{ 'aria-label': 'controlled' }}
      /> 
      <IconButton onClick={(e) => deleteTodo(id,e)}>
        <DeleteRoundedIcon />
      </IconButton>
      <IconButton onClick={() => setTodo({id,title,detail,timestamp})}>
        <MoreVertRoundedIcon />
      </IconButton>
      </>
    }
    >
        <ListItemText
            primary={title}
            secondary={moment(timestamp).format("MMMM,dd.yyyy")}
            />

    </ListItem>
  )
}

export default Todo