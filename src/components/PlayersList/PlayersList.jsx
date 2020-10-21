import React from 'react';

import './PlayersList.scss';

function PlayersList({ playersData }) {
  return (
    <ul className='names'>
      {playersData.map((player, index) => {
        return (
          <li className='name' key={index}>
            <a href={`#${player.id}`}>{player.name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default PlayersList;
