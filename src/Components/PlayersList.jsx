import React from 'react';

function PlayersList({ playersData }) {
  return (
    <ul className='names'>
      {playersData.map((player, index) => {
        return (
          <a href={`#${player.id}`} key={index}>
            <li className='name'>{player.name}</li>
          </a>
        );
      })}
    </ul>
  );
}

export default PlayersList;
