import React, { createContext, useReducer, useEffect } from 'react';

//initial state
const initialState = JSON.parse(localStorage.getItem('players'))
  ? JSON.parse(localStorage.getItem('players'))
  : [];

//reducer
const PlayerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [action.payload, ...state];

    case 'EDIT_PLAYER':
      return state.map((player) =>
        player.id === action.payload.id ? action.payload : player
      );

    case 'REMOVE_PLAYER':
      return state.filter((player) => player.id !== action.payload);

    default:
      return state;
  }
};

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
