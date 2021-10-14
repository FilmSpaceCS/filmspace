import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
//import Shows from './Shows.jsx'

const MyListPage = (props) => {
  const [displayName, setDisplayName] = useState('');
  const [showName, setShowName] = useState('');
  const [url, setUrl] = useState('');
  const [icon, setIcon] = useState('');
  const [showCard, setShowCard] = useState([]);
  
  console.log('userId: ',props.location.state.userId);
  useEffect(() => {
    axios.post('/users/getAll', { userId: props.location.state.userId })
      .then(response => {
        console.log(response);
        // setDisplayName(temp);
        // setShowName(temp);
        // setUrl(temp);
        // setIcon(temp);
        setShowCard(response);
      })
      .catch(err => {
        console.error(err);
      });
  })
  // reads response from state 
  const showListCards = showCard.map((show, index) => {
    <ShowCards 
      key={index}
      showName={ show.showName }
      displayName={ show.display_name }
      url={ show.url }
      icon={ show.icon }
    />
  })
  return (
    <div>
        <Link to="/homePage">
          <input type='button' value='Home' />
        </Link>      
        <div className="show-card-container">
        { showListCards }
      </div>
    </div>
  )
}

export default MyListPage;