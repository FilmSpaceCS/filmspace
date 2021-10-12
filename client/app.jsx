import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx'

const App = () => {
  return (
    <div>
      {/* <Router> */}
        <MainContainer />
      {/* </Router> */}
   </div>
  )
}

export default App;