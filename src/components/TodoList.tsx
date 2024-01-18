import React from 'react'

export type Task = {
  id: string,
  description: string
}

type Props = {
    Tasks: Array<Task>,
    deleteT: (idT: string) => void,
    editT: (idT: string, description: string) => void
}

const TodoList: React.FC<Props> = ( {Tasks, deleteT, editT} ) => {
  const handleClick = (id:string) => {
    deleteT(id)
 }

 const handleChange = (id:string, e:React.ChangeEvent<HTMLInputElement>) => {
    editT(id, e.target.value)
 }

  return (
    <section className='todoList'>
      { Tasks.map((t) => {
        return (
          <div className='task' key={t.id}>
            <input className="check" type="checkbox" onClick={() => handleClick(t.id)}/><input className="inputTask" type="text" value={t.description} onChange={(e) => handleChange(t.id, e)}/>
          </div>
        )
      })

      }

    </section>
  )
}

export default TodoList;