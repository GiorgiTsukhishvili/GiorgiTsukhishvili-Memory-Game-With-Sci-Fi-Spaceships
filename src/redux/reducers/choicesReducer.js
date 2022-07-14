const choices = (state = { choiceOne: null, choiceTwo: null }, action) => {
  switch (action.type) {
    case "CHOICEONE":
      return { ...state, choiceOne: action.payload };
    case "CHOICETWO":
      return { ...state, choiceTwo: action.payload };
    default:
      return state;
  }
};

export default choices;
