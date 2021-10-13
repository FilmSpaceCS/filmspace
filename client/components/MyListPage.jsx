import React, { useEffect } from 'react'
//import Shows from './Shows.jsx'

const MyListPage = (props) => {
  const [displayName, setDisplayName] = useState('');
  const [showName, setShowName] = useState('');
  const [url, setUrl] = useState('');
  const [icon, setIcon] = useState('');
  const [showCard, setShowCard] = useState([]);

  useEffect(() => {
    axios('/user/getAll')
      .then(response => {
        console.log(response);
        setDisplayName(temp);
        setShowName(temp);
        setUrl(temp);
        setIcon(temp);
        setShowCard([...response]);
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
      <input type='button' onClick={something} value='Home' />
      <div>
        { showListCards }
      </div>
    </div>
  )
}

export default MyListPage;