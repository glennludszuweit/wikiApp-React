import React, { createContext, useReducer, useEffect } from 'react';
import PlayerReducer from './PlayerReducer';

//initial state
const start = [
  {
    id: 0,
    name: 'Start here',
    description:
      '<h1>Welcome to Football Players Wikipedia!</h1><p style="color: red">Start by adding new players using the PLUS button in the top right corner of your screen</p>',
  },
];
const initialState = JSON.parse(localStorage.getItem('players')) || start;

//context
export const PlayerContext = createContext(initialState);

//provider
export const PlayerProvider = ({ children }) => {
  const [playersState, dispatch] = useReducer(PlayerReducer, initialState);

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(playersState));
  }, [playersState]);

  //add player
  const addPlayer = (player) => {
    dispatch({
      type: 'ADD_PLAYER',
      payload: player,
    });
  };

  //edit player
  const editPlayer = (player) => {
    dispatch({
      type: 'EDIT_PLAYER',
      payload: player,
    });
  };

  //delete player
  const removePlayer = (id) => {
    dispatch({
      type: 'REMOVE_PLAYER',
      payload: id,
    });
  };

  return (
    <PlayerContext.Provider
      value={{ playersState, addPlayer, editPlayer, removePlayer }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
