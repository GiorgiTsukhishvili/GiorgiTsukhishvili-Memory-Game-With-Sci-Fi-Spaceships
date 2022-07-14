import React from "react";
import "./SingleCard.css";

function SingleCard({ card, cover, handleChoice, flipped }) {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="card-front" />
        <img
          src={cover}
          className="back"
          alt="card-back"
          onClick={() => handleChoice(card)}
        />
      </div>
    </div>
  );
}

export default SingleCard;
