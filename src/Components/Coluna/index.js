import React from "react";
import { ContainerColuna } from "./styles";
import Card from "../Card";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const Coluna = ({
  titulo,
  cards,
  onClickOpenModal,
  idBucket,
  deleteCard,
  deleteBucket,
}) => {
  const cardsColumn = cards.filter((item) => item.idColuna === idBucket);

  return (
    <ContainerColuna className="card b-light mx-2 col-md-2 p-0">
      <h5 className="card-header p-3">
        <div className="d-flex justify-content-between align-items-center">
          <span>{titulo} </span>
          <button
            onClick={() => onClickOpenModal(idBucket)}
            className="btn btn-primary d-flex"
          >
            <FaPlus />
          </button>
        </div>
      </h5>
      <div className="card-body">
        {cardsColumn.map((item, index) => (
          <Card
            cardId={item.cardId}
            deleteCard={deleteCard}
            key={index}
            titulo={item.titulo}
            descricao={item.descricao}
            info={item.info}
          />
        ))}
      </div>
      <div className="d-flex justify-content-end m-3">
        <button
          className="btn btn-danger"
          onClick={() => deleteBucket(idBucket)}
        >
          <RiDeleteBin5Line />
        </button>
      </div>
    </ContainerColuna>
  );
};

export default Coluna;
