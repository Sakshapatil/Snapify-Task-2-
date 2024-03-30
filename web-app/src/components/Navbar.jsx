import React,{ useContext } from 'react'
import logo from "../img/logo.png"
import "./navbar.css";
import{Link} from "react-router-dom"


const Navbar = () => {

 

  const loginStatus=()=>{
    const token=localStorage.getItem("jwt")
    if(token)
    {
      return[
        <>
                <Link to='/createPost'><li>Create Post</li></Link>
                

        </>
      ]
    }
    else{
      return [
        <>
        <Link to='/signin'><li>Sign In</li></Link>
        <Link to='/signup'><li>Sign Up</li></Link>
        </>
      ]
    }
  }
  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt='logo'/></Link>
      <ul className='navbar-menu'>
        {loginStatus()}

      </ul>
    </div>
  )
}

export default Navbar