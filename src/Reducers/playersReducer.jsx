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
    case 'ACTION_TYPE':
      return;
    default:
      return state;
  }
};
