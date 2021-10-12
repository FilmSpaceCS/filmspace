import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogInPage from '../components/LogInPage.jsx';
import Search from '../components/Search.jsx';
import MyList from '../components/MyList.jsx';

const MainContainer = props => {
  return (
    <div>
      <LogInPage />

    </div>
  )
}

export default MainContainer; 

{/* <Switch>
<Route exact path="/" component={ LogInPage } /> 
<Route exact path="/search" component={ Search } />
<Route exact path="/myList" component={ MyList } />
</Switch> */}