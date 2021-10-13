import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
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