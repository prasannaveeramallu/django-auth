import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Signup.css'

const Signup = () => {
    const [usernameInput, setUsernameInput] = useState()
    const [passwordInput, setPasswordInput] = useState()
    const [emailInput, setEmailInput] = useState()
    
    const handleUsernameChange = (event) => {
      setUsernameInput(event.target.value)
    }
  
    const handlePasswordChange = (event) => {
      setPasswordInput(event.target.value)
    }
  
    const handleEmailChange = (event) => {
        setEmailInput(event.target.value)
    }

    const handleLoginBtn = () => {
      axios
      .post('http://127.0.0.1:8000/signup', {
          "username": usernameInput, "password": passwordInput, "email": emailInput
      })
      .then(() => alert('Successfully registered user!'))
      .catch((err) => console.log(err))
    }
  

  return (
    <div>
        <p>Enter username:</p>
        <input type='text' placeholder='username...' onChange={handleUsernameChange}/>
        <p>Enter password:</p>
        <input type='text' placeholder='password...' onChange={handlePasswordChange}/>
        <p>Enter e-mail:</p>
        <input type='text' placeholder='email...' onChange={handleEmailChange}/>
        <button onClick={handleLoginBtn}>Sign up</button>
        <p>Already existing user? <span><Link to='/login'>Login here!</Link></span></p>
    </div>
  )
}

export default Signup