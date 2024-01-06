import axios from "axios";
import React, { useState } from "react";
import "./login.css";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux.js/authReducer";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e) =>{
      e.preventDefault()
       const credentuals ={
          username : username,
          password : password
       }

       axios.post("http://localhost:8080/auth/login",credentuals).then((res)=>{
            console.log(res.data)
            dispatch(loginSuccess(res.data.others))
            navigate('/')
       }).catch((err)=>{
          console.log(err)
       })
  }
  return (
    <div className="loginContainer">
      <div className="logMiniContainer">
        <div className="lgSlide1">
          <h3>Welcome</h3>
          <h6>
              Don't have an account ? Create your account it takes <br /> less
              than a minute
            </h6>
            <div className="signup">
            <button onClick={()=>navigate('/register')}>Sign Up</button>
            </div>
        </div>

        <div className="lgSlide2">
          <div className="loginTitle">
            <h3>Login</h3>
            <h6>
              Don't have an account ? Create your account it takes <br /> less
              than a minute
            </h6>
          </div>

          <div className="inputGroup">
            <input type="text" placeholder="username" 
            onChange={(e)=>setUsername(e.target.value)} value={username}
            />
            <input type="text" placeholder="password"  
            onChange={(e)=>setPassword(e.target.value)} value={password}
            />
          </div>
          <div className="forgot">
            <span> forgot password ? </span>
          </div>
          <div className="loginButton">
            <button className="login" onClick={handleLogin}>Login</button>
          </div>

          <div className="socialHandle">
            <h6>login with social media</h6>
            <div className="lgSocialAccounts">
              <button>
                <FaFacebook className="facebook" /> facebook
              </button>
              <button>
                <FaGooglePlusG className="google" /> google
              </button>
              <button>
                <FaTwitter className="twitter" /> twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <input type='text' onChange={(e)=>setUsername(e.target.value)} value={username}/><br/>
<input type='text' onChange={(e)=>setPassword(e.target.value)} value={password}/>
 
 <button onClick={handleLogin}>Login</button> */
}
