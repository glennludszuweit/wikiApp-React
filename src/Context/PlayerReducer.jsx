export default (state, action) => {
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
