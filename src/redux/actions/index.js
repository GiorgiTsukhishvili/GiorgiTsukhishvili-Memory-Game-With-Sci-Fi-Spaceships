export const turnsAction = () => {
  return {
    type: "RESET",
  };
};

export const cardsAction = (pay) => {
  return {
    type: "SHUFFLE",
    payload: pay,
  };
};

export const addTurn = () => {
  return {
    type: "ADD",
  };
};

export const flipCards = (trueCard) => {
  return {
    type: "FLIPCARD",
    payload: trueCard,
  };
};

export const dispatchChoiceOne = (choice) => {
  return {
    type: "CHOICEONE",
    payload: choice,
  };
};

export const dispatchChoiceTwo = (choice) => {
  return {
    type: "CHOICETWO",
    payload: choice,
  };
};
