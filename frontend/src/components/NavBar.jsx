import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const NavBar = () => {
  return (
    
    <div className='p-2 '>
    <Link to="/"><Button  variant="primary" className='mx-1'>Home</Button></Link>
    <Link to="/favorite"><Button variant="primary" className='mx-1'>Favorite</Button></Link>
    </div>
  )
}

export default NavBar