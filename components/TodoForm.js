import { Button, TextField } from '@mui/material'

const TodoForm = () => {
  return (
    <div>
        <TextField fullWidth label='title' margin='normal'/>
        <TextField fullWidth label='detail' multiline maxRows={4} />
        <Button variant="contained" sx={{mt:3}}>Add a new todo</Button>
    </div>
  )
}

export default TodoForm