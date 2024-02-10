import React from "react";
import { useState } from "react";

const Addtodo = (props) => {
  const [ Title , setTitle] =useState("")
  const [ Desc , setDesc] =useState("")

  let submit = (e)=>
  {
    
    e.preventDefault()
    
    if(!Title || !Desc)
    {
      alert("Ttile or Description Cannot be Empty")
    }
    else
    {
      props.addTodo(Title,Desc);
      setTitle("");
      setDesc("");
    }
    

  }

  return (
    <div className="container my-3">
        <h3>Add a ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            ToDo Title
          </label>
          <input
            type="text"
            value={Title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control"
            id="title"
            
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            ToDo Description
          </label>
          <input
            type="text"
            value={Desc}
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success" >
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
