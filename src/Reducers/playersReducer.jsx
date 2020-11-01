const initialState = JSON.parse(localStorage.getItem('players'))
  ? JSON.parse(localStorage.getItem('players'))
  : [];

export const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return;
    default:
      return state;
  }
};
