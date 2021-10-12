import React , { useState } from 'react'
import axios from 'axios'

const LogInPage = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const submitLogIn = (username, password) => {
    const body = {
      username,
      password
    };
    console.log(body)
    axios.post('/user', 
      body
    )
    .then(response => {
      console.log(response);

    })
    .catch(err => {
      console.error(err);
      
    });
  }
  return (
    <div>
      <label htmlFor="username">
        Username:
        <input type='text' name='username' id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label htmlFor="password">
        Password:
        <input type='text' name='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <input type='button' value='Log In' onClick={submitLogIn(username, password)}/>
      <a href='./SignUpPage'> 
        <input type='button' value='Sign up' />
      </a> 
    </div>
  )
}

export default LogInPage;