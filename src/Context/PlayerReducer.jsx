export default (playersState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [action.payload, ...playersState];

    case 'EDIT_PLAYER':
      return playersState.map((player) =>
        player.id === action.payload.id ? action.payload : player
      );

    case 'REMOVE_PLAYER':
      return playersState.filter((player) => player.id !== action.payload);

    default:
      return playersState;
  }
};
