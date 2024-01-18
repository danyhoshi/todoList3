import React, { useState } from 'react'
// import { Task } from './TodoList'

type Props = {
  Add: (t: string) => void
}
const Input:  React.FC<Props> = ({Add}) => {
  const [input, setInput] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleClick = () => {
    console.log("click")
    Add(input)
    setInput('')
  }
  return (
    <div className='containerAdd'> 
        <input className='inputAdd' id='in' 
          type="text" 
          placeholder='Insert a task' 
          onChange={handleChange}
          value={input}
         />
        <button onClick={handleClick}>
          Add
        </button>
   
    </div>
  )
}

export default Input