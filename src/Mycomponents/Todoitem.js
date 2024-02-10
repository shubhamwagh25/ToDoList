import React from "react";

const Todoitem = (props) => {
  console.log(props.Todo.title)
  return (
    <div className="container">
      <h4>{props.Todo.title}</h4>
      <p>{props.Todo.desc}</p>
      
      <button
        className="btn btn-sm btn-danger "
        onClick={() => {
          props.Delete(props.Todo);
        }}
      >
        Delete
      </button>
      <br/>
    </div>
  );
};


export default Todoitem;
