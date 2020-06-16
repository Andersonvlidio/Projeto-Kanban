import React from "react";
import { ContainerColuna } from "./styles";
import Card from "../Card";
import { FaPlus } from "react-icons/fa";

const Coluna = ({ titulo, cards, onClickOpenModal }) => {
  return (
    <ContainerColuna className="card b-light mx-2">
      <h5 className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <span>{titulo} </span>
          <button onClick={onClickOpenModal} className="btn btn-primary d-flex">
            <FaPlus />
          </button>
        </div>
      </h5>
      <div className="card-body">
        {cards.map((item, index) => (
          <Card
            key={index}
            titulo={item.titulo}
            descricao={item.descricao}
            info={item.info}
          />
        ))}
      </div>
    </ContainerColuna>
  );
};

export default Coluna;
