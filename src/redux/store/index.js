import { combineReducers, createStore } from "redux";
import cardsReducer from "../reducers/cardsReducer";
import turnsReducer from "../reducers/turnsReducer";
import choices from "../reducers/choicesReducer";

const store = createStore(
  combineReducers({
    cards: cardsReducer,
    turns: turnsReducer,
    choices: choices,
  })
);

export default store;
