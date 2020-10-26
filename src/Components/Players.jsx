import React, { useContext } from 'react';
import { PlayerContext } from '../Context/PlayerState';
import { Link } from 'react-router-dom';

function Players() {
  const { playersState } = useContext(PlayerContext);

  return (
    <ul className='names'>
      {playersState.map((player, index) => {
        return (
          <Link key={index} to={`/${player.id}`}>
            <li className='name'>{player.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Players;
