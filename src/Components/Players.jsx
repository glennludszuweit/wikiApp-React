import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PlayerContext } from '../Context/PlayerState';

function Players() {
  const { playersState } = useContext(PlayerContext);

  return (
    <ul className='names'>
      {playersState.map((player, index) => {
        return (
          <Link to={`/${player.slug}`} key={index}>
            <li className='name'>{player.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Players;
