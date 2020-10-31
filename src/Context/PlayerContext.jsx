import React, { createContext, useEffect, useState } from 'react';

const initialState = JSON.parse(localStorage.getItem('players'))
  ? JSON.parse(localStorage.getItem('players'))
  : [];

export const PlayerContext = createContext(initialState);

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState(initialState);

  useEffect(() => {
    return localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  const currentPlayer = (params) => {
    const { slug } = params;
    const index = players.findIndex((player) => player.slug === slug);
    const player = players[index];
    return player;
  };

  const addPlayer = (player) => {
    setPlayers([player, ...players]);
  };

  const editPlayer = (currentPlayer) => {
    const update = players.map((player) =>
      player.id === currentPlayer.id ? currentPlayer : player
    );
    setPlayers([...update]);
  };

  const removePlayer = (id) => {
    const remove = players.filter((player) => player.id !== id);
    setPlayers([...remove]);
  };

  return (
    <PlayerContext.Provider
      value={{
        players,
        currentPlayer,
        addPlayer,
        editPlayer,
        removePlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
