
import { ListItem, ListItemText } from '@mui/material';

import moment from 'moment/moment'

const Todo = ({id,title,timestamp,detail}) => {
  return (
    <ListItem sx={{mt:3, boxShadow:3}}
    style={{background:'#FAFAFA'}}>
        <ListItemText
            primary={title}
            secondary={moment(timestamp).format("MMMM,dd.yyyy")}
            />

    </ListItem>
  )
}

export default Todo