import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlayerContext } from '../Context/PlayerState';

function Player() {
  const { playersState, removePlayer } = useContext(PlayerContext);
  const { slug } = useParams();
  const index = playersState.findIndex((player) => player.slug === slug);
  const player = playersState[index];

  return (
    <div>
      <div className='content-heading'>
        <h2 className='player-name'>{player.name}</h2>
        <div className='icons'>
          <Link to={`/edit/${player.slug}`}>
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
