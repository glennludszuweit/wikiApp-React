import React, { createContext, useEffect, useState } from 'react';

const initialState = JSON.parse(localStorage.getItem('players'))
  ? JSON.parse(localStorage.getItem('players'))
  : [];

export const PlayerContext = createContext(initialState);

export const PlayerProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    return localStorage.setItem('players', JSON.stringify(state));
  }, [state]);

  const currentPlayer = (params) => {
    const { slug } = params;
    const index = state.findIndex((player) => player.slug === slug);
    const player = state[index];
    return player;
  };

  const addPlayer = (player) => {
    setState([player, ...state]);
  };

  const editPlayer = (currentPlayer) => {
    const update = state.map((player) =>
      player.id === currentPlayer.id ? currentPlayer : player
    );
    setState([...update]);
  };

  const removePlayer = (id) => {
    const remove = state.filter((player) => player.id !== id);
    setState([...remove]);
  };

  return (
    <PlayerContext.Provider
      value={{
        state,
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
