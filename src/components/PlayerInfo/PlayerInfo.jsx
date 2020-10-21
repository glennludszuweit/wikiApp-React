import React from 'react';

import './PlayerInfo.scss';

function PlayerInfo({ player }) {
  return (
    <div>
      <div className='content-heading'>
        <h2 className='player-name'>{player.name}</h2>
        <div className='icons'>
          <a href={`#edit/${player.id}`}>
            <i className='fas fa-edit edit-button'></i>
          </a>
          <i className='fas fa-trash delete'></i>
        </div>
      </div>
      <div className='player-info'>
        <div
          dangerouslySetInnerHTML={{
            __html: player.description,
          }}
        />
      </div>
    </div>
  );
}

export default PlayerInfo;
