import React , { useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const LogInPage = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePasswordShow = () => {
    setPasswordShow(passwordShow ? false : true)
  };

  const submitLogIn = (username, password) => {
    const body = {
      username,
      password
    };
    console.log(body)
    axios.get('/users/login', 
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
    <div class="login">
      <label htmlFor="username">
        Username:
        <input type='text' name='username' id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label htmlFor="password">
        Password:
        <input type='text' name='password' id="password" value={password} type={passwordShow ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)}/>  
      </label>
      <input type='button' value='Log In' onClick={submitLogIn(username, password)}/>
      <Link to="/signUpPage">
        <input type='button' value='Sign up' />
      </Link>
    </div>
  )
}

export default LogInPage;