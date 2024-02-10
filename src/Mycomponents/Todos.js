import React from 'react'
import Todoitem from './Todoitem'

const Todos = (props) => {

  let style=
  {
    minHeight: "50rem"
  }
  return (
    <div className='container text-left' style={style}>
      <h3 className=' my-3'>ToDos List</h3>
      {props.todos.length === 0 ? "No ToDo to Display" :

      props.todos.map((todo)=>
      {
        return ( <>
        <Todoitem Todo={todo}  key={todo.sno}  Delete={props.ONDelete} />
        <hr/> </>)

      })
    }
      

    </div>
  )
}

export default Todos
