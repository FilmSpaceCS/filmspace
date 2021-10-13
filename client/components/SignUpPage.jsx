import React from 'react';
import axios from 'axios';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e)
  axios.post('/users/signUp', 
      body
    )
    .then(response => {
      console.log(response);

    })
    .catch(err => {
      console.error(err);
      
    });
}

const SignUpPage = () => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label for='username'>
          Username: 
          <input type='text' placeholder='Username'/>
        </label>
        <label for='password'>
          Password:
          <input type='text' placeholder='Password'/>
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default SignUpPage;