import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, useNavigate, Routes } from 'react-router-dom'
import About from './about';


export default function Header(props) {
  const navigate = useNavigate();
  function handelClick(){
    navigate('/about');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" >{props.Title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href='/about'>About</a>
        
        </li>
        
          
        
      </ul>
      {props.searchbar? <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : ""}
    </div>
  </div>
</nav>
{/* <Routes>
       
          <Route path="/about" element={<About />} />

        </Routes> */}
    </div>
  )
}

Header.defaultProps = {
    Title:"Title is Here",
    searchbar : true 
}

Header.propTypes =
{
    Title: PropTypes.string ,
    searchbar:PropTypes.bool
}
