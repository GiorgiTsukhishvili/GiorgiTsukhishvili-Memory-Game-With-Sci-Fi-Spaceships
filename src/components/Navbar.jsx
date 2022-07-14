import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  turnsAction,
  cardsAction,
  dispatchChoiceOne,
  dispatchChoiceTwo,
} from "../redux/actions";
import "./Navbar.css";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";

const cardImages = [
  { src: image1, matched: false },
  { src: image2, matched: false },
  { src: image3, matched: false },
  { src: image4, matched: false },
  { src: image5, matched: false },
  { src: image6, matched: false },
];

function Cards() {
  const state = useSelector((state) => state.turns);

  const dispatch = useDispatch();

  const shuffle = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    console.log(shuffledCards);

    dispatch(dispatchChoiceOne(null));
    dispatch(dispatchChoiceTwo(null));

    dispatch(cardsAction(shuffledCards));

    dispatch(turnsAction());
  };

  return (
    <div className="navbar-main">
      <h1 className="navbar-header">Sci-Fi Match</h1>

      <button onClick={shuffle}>New Game</button>

      <h1>Turns: {state}</h1>
    </div>
  );
}

export default Cards;
