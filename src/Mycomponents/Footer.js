import React from 'react'

const Footer = () => {
  const styleobj=
    {
      position: "relative",
      top: "10vh",
      width: "100%"
    }
  return (
    
    <footer className='bg-dark text-light py-3  ' style={styleobj}>
      <p className='text-center m-5'   >
        Copuright &copy; MyTodolist.com
      </p>
    </footer>
  )
}

export default Footer
