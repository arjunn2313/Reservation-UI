import React, { useEffect, useState } from "react";
import "./createAccount.css";
import { Link } from "react-router-dom";
 
export default function CreateAccount() {

  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[rePass,setRePass] = useState("")
  const[errors,setErrors] = useState("")

  

  const handleSubmit = (e) =>{
    e.preventDefault()
      
    const error = {}

    if(!username,!email){
      error.empty = "Input field cannot be empty"
    }

    if(!username){
      error.name = "please enter user name"
    }

    if(!email){
      error.email = "please enter email"
    }

    if(!password){
      error.password = "please enter password"
    }

    if(!rePass){
      error.repass = "please re-enter password"
    }

    if(Object.keys(error).length > 0){
      setErrors(error)
    }else{
      alert('hi')
    }
  }
  return (
    <div className="registerContainer">
      <div className="regBox">
             <h2>Create Account</h2>
             <div className="regInput">
            <input type="text" placeholder="username" value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <input type="email" placeholder="email" value={email}
             onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" placeholder="password" value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
            <input type="password" placeholder="re-enter password" value={rePass}
             onChange={(e)=>setRePass(e.target.value)}
            />
             </div>
             <span>
              <input type="checkbox"/>
            <label> I accept terms & conditions</label>
             </span>
             <button className="regButton" 
             onClick={handleSubmit}
             >Create Account</button>
              
              <Link to='/login'
              style={{textDecoration:'none',marginTop:'20px'}}
              >I already have account! login</Link>
              
            {errors && <div className="warning">
            **  {errors.name}  {errors.empty}  {errors.email}  {errors.password}  {errors.repass}  **
            </div>
              }
          </div>
    </div>
  );
}
