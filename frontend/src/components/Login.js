import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Login.css'
const Login = () => {

  const [usernameInput, setUsernameInput] = useState()
  const [passwordInput, setPasswordInput] = useState()
  
  const handleUsernameChange = (event) => {
    setUsernameInput(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value)
  }

  const handleLoginBtn = () => {
    axios
    .post('http://127.0.0.1:8000/login', {
        "username": usernameInput, "password": passwordInput
    })
    .then(() => alert('Successfully Logged In!'))
    .catch((err) => console.log(err))
  }

  return (
    <div>
        <p>Enter username:</p>
        <input type='text' placeholder='username...' onChange={handleUsernameChange}/>
        <p>Enter password:</p>
        <input type='text' placeholder='password...' onChange={handlePasswordChange}/>
        <button onClick={handleLoginBtn}>Login</button>
        <p>New user? <span><Link to='/signup'>Sign up here!</Link> </span></p>
    </div>
  )
}

export default Login