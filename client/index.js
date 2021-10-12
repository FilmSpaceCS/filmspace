//Dependencies 
import * as React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
//React Component 
import App from './app';

render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
);