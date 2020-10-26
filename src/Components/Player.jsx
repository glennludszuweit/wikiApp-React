import React from 'react';
import { Link } from 'react-router-dom';

function Player({ player, removePlayer }) {
  return (
    <div>
      <div className='content-heading'>
        <h2 className='player-name'>{player.name}</h2>
        <div className='icons'>
          <Link to={`/edit/${player.id}`}>
            <i className='fas fa-edit edit-button'></i>
          </Link>
          <Link to='/' onClick={() => removePlayer(player.id)}>
            <i className='fas fa-trash delete'></i>
          </Link>
        </div>
      </div>

      <div className='player-info'>
        <div dangerouslySetInnerHTML={{ __html: player.description }} />
      </div>
    </div>
  );
}

export default Player;
