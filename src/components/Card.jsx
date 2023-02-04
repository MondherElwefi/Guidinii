import React from "react";
import "./Card.css";
function Card({img,title,text}) {
  return (
    <div className="card card-wrapper">
        <img src={img} className="card-img card-img-top" alt="image card" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
  );
}

export default Card;
