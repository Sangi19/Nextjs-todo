import { collection, addDoc, serverTimestamp, query } from "@firebase/firestore"

import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { db } from "../firebase"

const TodoForm = () => {
  const [todo, setTodo] = useState({title:'', detail:''})

  const onSubmit= async() => {
  const collectionRef= collection(db, "todos")
  const docRef= await addDoc(collectionRef,{...todo, timestamp:serverTimestamp()})
  setTodo({title:'', detail:''})
  alert(`Todo with id ${docRef.id} is added successfully`)
}

  return (
    <div>
        <TextField fullWidth label='title' margin='normal'
        value={todo.title}
        onChange={(e) => setTodo({...todo, title: e.target.value})}
        />
        <TextField fullWidth label='detail' multiline maxRows={4} 
        value={todo.detail}
        onChange={(e) => setTodo({...todo, detail: e.target.value})}
        />
        <Button onClick={onSubmit} variant="contained" sx={{mt:3}}>Add a new todo</Button>
    </div>
  )
}

export default TodoForm