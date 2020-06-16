import React from "react";

const Card = ({ titulo, descricao, info }) => {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">{titulo}</div>
      <div className="card-body">
        <p className="card-text">{descricao}</p>
        <div className="card-footer">{info}</div>
      </div>
    </div>
  );
};

export default Card;
