import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Card = ({ titulo, descricao, info, deleteCard, cardId }) => {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        {titulo}
        <span className="text-white p-2" onClick={() => deleteCard(cardId)}>
          <RiDeleteBin5Line size="20" />
        </span>
      </div>
      <div className="card-body">
        <p className="card-text">{descricao}</p>
        <div className="card-footer">{info}</div>
      </div>
    </div>
  );
};

export default Card;
