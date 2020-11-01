import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const List = () => {
  const players = useSelector((state) => state.players);

  return (
    <ul>
      {players.map((player) => {
        return (
          <Link to={`/${player.slug}`} key={player.id}>
            <li>{player.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default List;