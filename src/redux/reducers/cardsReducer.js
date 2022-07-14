const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case "SHUFFLE":
      return action.payload;
    case "FLIPCARD":
      return state.map((card) =>
        card.src === action.payload ? { ...card, matched: true } : card
      );
    default:
      return state;
  }
};

export default cardsReducer;
