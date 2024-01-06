import React from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux.js/authReducer'
import { FaUser } from "react-icons/fa";
 
 
 

export default function Navbar() {
  console.log("navbar")
    
  const navigate = useNavigate()
  const user = useSelector((state)=>state.auth.user)
  const dispatch = useDispatch()
 console.log(user)

 const handleLogout = () =>{
  dispatch(logOut())
 }
 
  return (
    <div className='navbar'>
        <div className='navContainer'>
          <Link to="/" style={{color:'inherit',textDecoration:"none"}}>
          <span className='logo'> Booking</span>
          </Link>
           <div className='navItems'>
            {user ? <>
              
            <span> <FaUser/> {user.username}</span>
              <button className='navButton'
              onClick={handleLogout}
              >logout</button>
              </> : <>
            <button className='navButton'
            onClick={()=>navigate('/register')}
            >Register</button>
            <button className='navButton'
            onClick={()=>navigate('/login')}
              >Login</button></>}
            </div>
        </div>
    </div>
  )
}
