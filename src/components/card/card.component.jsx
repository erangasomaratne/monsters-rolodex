import React from "react";
import "./card.style.css";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/BE${monster.id}.png?set=set2`}
        alt={monster.name}
        height="200"
        width="200"
      />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
