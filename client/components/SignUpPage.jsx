import React, { useState } from 'react';
import { Route, Redirect } from 'react-router';
import axios from 'axios';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [userId, setUserId] = useState('');

  const handleSubmit = (username, password) => {
    // e.preventDefault();
    // console.log(e.target)
    const body = {username, password};
    axios.post('/users/signUp', 
        body
      )
      .then(response => {
        console.log('response: ', response);
        setUserId(response.data.id);
        setLoggedIn(true);
      })
      .catch(err => {
        console.error(err);
        
      });
  }
  
  return (
    loggedIn ? <Redirect to={{
      pathname:'/homePage',
      state: { userId }}}  /> : 
      <div className="signup">
        <label htmlFor='username'>
          Username: 
          <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor='password'>
          Password:
          <input type='text' placeholder='Password' type={passwordShow ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input type='submit' value='Submit' onClick={() => handleSubmit(username, password)}/>
      </div>
  )
}

export default SignUpPage;