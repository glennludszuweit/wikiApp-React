import React, { createContext, useReducer, useEffect } from 'react';
import PlayerReducer from './PlayerReducer';

//initial state
const initialState = JSON.parse(localStorage.getItem('players'))
  ? JSON.parse(localStorage.getItem('players'))
  : [];

//context
export const PlayerContext = createContext(initialState);

//provider
export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  useEffect(() => {
    return localStorage.setItem('players', JSON.stringify(state));
  }, [state]);

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
      value={{
        state,
        addPlayer,
        editPlayer,
        removePlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
