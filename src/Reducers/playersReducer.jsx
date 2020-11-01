const initialState = [
  {
    id: 1,
    name: 'Leo Messi',
    description: 'Hello Messi',
    slug: 'leomessi',
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    description: 'Hello Ronaldo',
    slug: 'cristianoronaldo',
  },
  {
    id: 3,
    name: 'Robert Lewandowski',
    description: 'Hello Lewandowski',
    slug: 'robertlewandowski',
  },
];

export const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_PLAYER':
      const index = state.findIndex((player) => player.slug === action.payload);
      const player = state[index];
      return player;

    case 'ADD_PLAYER':
      return [...state, action.payload];

    case 'EDIT_PLAYER':
      return state.map((player) =>
        player.id === action.payload.id ? action.payload : player
      );

    case 'REMOVE_PLAYER':
      return state.filter((player) => player.id !== action.payload.id);

    default:
      return state;
  }
};
