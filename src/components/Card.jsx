import React from "react";
import "../styles/app.css";

const Card = ({ title, description, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default Card;
