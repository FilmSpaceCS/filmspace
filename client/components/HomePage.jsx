import React from 'react'
import axios from 'axios';
import ShowCards from './ShowCards';

const HomePage = () => {
  const [showName, setShowName] = useState('');
  const [shows, setShows] = useState([]);
  const searchShows = (showName) => {
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
      setShows(response);
    })
    .catch(err => {
      console.error(err);
      
    });
  }

  const addShowCard = ({showName, displayName, url, icon}) => {
    const body = {
      showName,
      displayName,
      url,
      icon
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
    <ShowCards 
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
      <input type='text' placeholder='Search Your Show' onChange={(e) => setShowName(e)}/>
      <input type='submit' value='Search' onClick={searchShows(showName)}/>
      <div>
        { showListCards }
      </div>
    </div>
  )
}

export default HomePage;