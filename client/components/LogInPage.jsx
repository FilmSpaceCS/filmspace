import React , { useState } from 'react'
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

const LogInPage = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  const [userId, setUserId] = useState('');
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSubmit = (username, password) => {
    console.log('USERNAME: ',username);
    const body = {
      username,
      password
    };
    console.log(body)
    axios.post('/users/login', 
      body
    )
    .then(response => {
      console.log(response);
      setUserId(response.data.id);
      setLoggedIn(true);
      
    })
    .catch(err => {
      console.error(err);
      
    });
  }
  return ( 
    loggedIn ? <Redirect to={{
      pathname: '/homePage',
      state: {userId: userId}
    }} /> :
      <div className="login">
        <label htmlFor="username">
          Username:
          <input type='text' name='username' id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label htmlFor="password">
          Password:
          <input type='text' name='password' id="password" value={password} type={passwordShow ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)}/>  
        </label>
        <input type='submit' value='Submit' onClick={() => handleSubmit(username, password)}/>
        <Link to="/signUpPage">
          <input type='button' value='Sign up' />
        </Link>
        <Link to="/myListPage">
          <input type='button' value='My List' />
        </Link>
      </div>

  )
}

export default LogInPage;