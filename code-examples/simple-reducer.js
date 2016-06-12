function reducer(state, action) {
  if (action.type === 'Change') {
    state = {
      ...state,
      ...action.data,
    };
  }
  return state;
}
