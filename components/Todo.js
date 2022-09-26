
import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import moment from 'moment/moment'
import { db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

const Todo = ({id,title,timestamp,detail}) => {
 
  const {showAlert}=useContext(TodoContext)

  const deleteTodo=async(id,e) => {
  e.stopPropagation();
  const docRef=doc(db,"todos",id)
  await deleteDoc(docRef)
  showAlert('error',`Todo with id ${id} deleted successfully`);
  }

  return (
    <ListItem sx={{mt:3, boxShadow:3}}
    style={{background:'#FAFAFA'}}
    secondaryAction={
      <>
      <IconButton onClick={(e) => deleteTodo(id,e)}>
        <DeleteRoundedIcon />
      </IconButton>
      <IconButton>
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