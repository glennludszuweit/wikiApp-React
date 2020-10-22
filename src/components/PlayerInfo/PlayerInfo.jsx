import React from 'react';

import './PlayerInfo.scss';

function PlayerInfo({ index, player, playersData, setPlayersData }) {
  const deletePlayer = () => {
    console.log(index);
    playersData.splice(index, 1);
    setPlayersData([...playersData]);
  };

  return (
    <div>
      <div className='content-heading'>
        <h2 className='player-name'>{player.name}</h2>
        <div className='icons'>
          <a href={`#edit/${player.id}`}>
            <i className='fas fa-edit edit-button'></i>
          </a>
          <i className='fas fa-trash delete' onClick={deletePlayer}></i>
        </div>
      </div>
      <div className='player-info'>{player.description}</div>
    </div>
  );
}

export default PlayerInfo;
