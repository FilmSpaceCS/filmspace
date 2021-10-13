import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogInPage from '../components/LogInPage.jsx';
import HomePage from '../components/HomePage.jsx';
import MyListPage from '../components/MyListPage.jsx';
import SignUpPage from '../components/SignUpPage.jsx';

const MainContainer = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ LogInPage } /> 
        <Route exact path="/signUpPage" component={ SignUpPage } /> 
        <Route exact path="/homePage" component={ HomePage } />
        <Route exact path="/myListPage" component={ MyListPage } />
      </Switch>
    </div>
  )
}

export default MainContainer; 

