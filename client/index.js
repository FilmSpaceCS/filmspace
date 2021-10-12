//Dependencies 
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//React Component 
import App from './app.jsx';

render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);