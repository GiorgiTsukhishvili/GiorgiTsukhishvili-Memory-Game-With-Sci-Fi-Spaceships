import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import cover from "../images/cover.jpg";
import "./CardTemplate.css";
import SingleCard from "./SingleCard";
import { useDispatch } from "react-redux";
import {
  addTurn,
  dispatchChoiceOne,
  dispatchChoiceTwo,
  flipCards,
} from "../redux/actions";

function CardTemplate() {
  const cards = useSelector((state) => state.cards);
  const choiceOne = useSelector((state) => state.choices.choiceOne);
  const choiceTwo = useSelector((state) => state.choices.choiceTwo);

  const dispatch = useDispatch();

  const [disable, setDisable] = useState(false);

  const handleChoice = (card) => {
    if (!disable) {
      choiceOne
        ? dispatch(dispatchChoiceTwo(card))
        : dispatch(dispatchChoiceOne(card));
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisable(true);
      if (choiceOne.src === choiceTwo.src) {
        dispatch(flipCards(choiceOne.src));
        reset();
      } else {
        setTimeout(() => reset(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const reset = () => {
    dispatch(dispatchChoiceOne(null));
    dispatch(dispatchChoiceTwo(null));
    dispatch(addTurn());
    setDisable(false);
  };

  return (
    <div className="card-grid">
      {cards.map((card) => {
        return (
          <SingleCard
            key={card.id}
            card={card}
            cover={cover}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        );
      })}
    </div>
  );
}

export default CardTemplate;
