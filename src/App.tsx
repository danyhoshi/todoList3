import { useState } from 'react'
import TodoList from './components/TodoList'
import Input from './components/Input'
import { Task } from './components/TodoList'
import { nanoid } from 'nanoid'

function App() {
  const [todo, setTodo] = useState<Array<Task>>([])
 const addTask = (descriptionT:string) => {
    setTodo( prevState => {
      return [...prevState, {id: nanoid(), description: descriptionT}]
    } )
  }
 const deleteTask = (idT: string) => {
    setTodo( prevState => {
      return prevState.filter(t => t.id != idT)
    } )
  }

  const editTask = (idT: string, descriptionT:string) => {
    setTodo( prevState => {
      return prevState.map(t => {
        
          if(idT == t.id)
            return { id: t.id, description: descriptionT }
          else
            return t
      })
    } )
  }
  return (
    <div className='container'>
      <h1>TodoList</h1>
      <Input Add={addTask}/>
      <TodoList Tasks = {todo}
              deleteT={ deleteTask }
              editT={ editTask }
      />
    </div>
  )
}

export default App
