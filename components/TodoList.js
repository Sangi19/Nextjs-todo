import { collection, onSnapshot, orderBy, query } from "@firebase/firestore"
import Todo from '../components/Todo'

import { useEffect, useState } from "react"
import { db } from "../firebase"

const TodoList = () => {
    const [todos, setTodos]=useState([])    
    const [fav, setFav]=useState([])    
    const [notFav, setNotFav]=useState([])
    
    let temp
    useEffect(() => {
      const collectionRef=collection(db,"todos")

      const q=query(collectionRef, orderBy("timestamp", "desc"));

      const unsubscribe=onSnapshot(q,(querySnapshot) => {
        let data = querySnapshot.docs.map(doc=> ({...doc.data(), id:doc.id, timestamp:doc.data().
          timestamp?.toDate().getTime() }))
        let fav = []
        let notFav = []
        data.map(todo => todo.favorites===true ? fav.push(todo):notFav.push(todo))
        setFav(fav)
        setNotFav(notFav)
        setTodos(data)
      
      });    


      
      return unsubscribe
    }, [])
    
    return(
      <div>
        
        <div>
          <h3>fav</h3>
          {fav.map(todo => <Todo key={todo.id} 
          id={todo.id}
          title={todo.title}
          detail={todo.detail}
          timestamp={todo.timestamp}
          favorites={todo.favorites}
        /> )}
        </div>

        <div>
          <h3>nonFav</h3>
          {notFav.map(todo => <Todo key={todo.id} 
          id={todo.id}
          title={todo.title}
          detail={todo.detail}
          timestamp={todo.timestamp}
          favorites={todo.favorites}
          /> )}
        </div>

    </div>
    )
}
export default TodoList