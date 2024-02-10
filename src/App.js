import { useState , react } from 'react';
import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import Addtodo from './Mycomponents/Addtodo';
import About from './Mycomponents/about';

import { Route, Routes, Link, useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate()

  let onDelete= (todo)=>{
    
    console.log("Hello",todo);
    settodo(todos.filter((e)=>
    {
      return e!==todo
    }))
  }

  let addTodo =(title, desc)=>{
    let sno;

    if(todos.length===0)
    {
      sno=0
    }
    else{

      sno=todos[todos.length-1].sno + 1
    }
      console.log(title, desc, sno)

      const mytodo =
      {
        sno:sno,
        title:title,
        desc:desc

      }
      
     console.log(mytodo)
     settodo([...todos, mytodo]);
     console.log(todos)
    

      
    

  }
  
  const [todos , settodo] =useState([

    
    // {
    //   sno : 1,
    //   title: "Go To The Market",
    //   desc : "You need to go to the market to get this job1 done"
    // },
    // {
    //   sno : 2,
    //   title: "Go To The School",
    //   desc : "You need to go to the market to get this job2 done"
    // },
    // {
    //   sno : 3,
    //   title: "Go To The Mall",
    //   desc : "You need to go to the market to get this job3 done"
    // } 

  ]) 

 
  return (
    <>
   
    <Header  Title='My ToDos List' searchbar={false}/>
    
   
    <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} ONDelete={onDelete}  />
    {/* <Routes>
    
    <Route path="/about" element={<About />} >About</Route>

    </Routes> */}
    
    <Footer/>
    
    </>
  );
}

export default App;
