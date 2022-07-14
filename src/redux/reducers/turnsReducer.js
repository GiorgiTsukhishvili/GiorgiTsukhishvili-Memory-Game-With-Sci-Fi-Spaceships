const turnsReducer = (state = 0, action) => {
  switch (action.type) {
    case "RESET":
      return 0;
    case "ADD":
      return state + 1;
    default:
      return state;
  }
};

export default turnsReducer;
