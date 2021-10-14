import React, { useState } from 'react'
import axios from 'axios';
import ShowCards from './ShowCards';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  const [showName, setShowName] = useState('');
  const [shows, setShows] = useState([]);

  console.log(props);

  const searchShows = () => {
    console.log('showName: ', showName);
    const body = {
      showName
    };
    console.log(body)
    axios.post('/media/show', 
      body
    )
    .then(response => {
      console.log(response);
      // update state with response (locations)array
      setShows(response.data.locs);
      setShowName(response.data.name);

    })
    .catch(err => {
      console.error(err);
      
    });
  }

  const addShowCard = ({showName, displayName, url, icon}) => {
    const body = {
      userId: props.location.state.userId,
      show: showName,
      service: displayName,
      url,
      img: icon
    };
    axios.post('/media/add', 
      body
    )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);     
    });
  }

  // reads response from state 
  const showListCards = shows.map((show, index) => {
    return <ShowCards 
      key={index}
      showName={ showName }
      displayName={ show.display_name }
      url={ show.url }
      icon={ show.icon }
      addShowCard= { addShowCard }
    />
  });
  return (
    <div>
      <input type='text' placeholder='Search Your Show' onChange={(e) => setShowName(e.target.value)}/>
      <input type='submit' value='Search' onClick={searchShows}/>
      <div className="show-card-container">
        { showListCards }
      </div>
      <Link to={{
        pathname: "/myListPage",
        state: { userId: props.location.state.userId }
      }}>
          <input type='button' value='My List' />
      </Link>    
    </div>
  )
}

export default HomePage;