import React from 'react';

const ShowCards = ({ showName, displayName, url, icon, addShowCard }) => {
  return (
    <div class="show-card">
        <h3>{showName}</h3>
        <img src={icon} />
        <a href={url}  target="_blank">{displayName}</a>
        <input type='button' onClick={addShowCard(showName, displayName, url, icon)} value='+' />
    </div>
  )
}

export default ShowCards;