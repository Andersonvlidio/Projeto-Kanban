import React, { useState } from "react";
import Container from "../Container";
import Title from "../Title";
import Coluna from "../Coluna";
import Kanban from "../Kanban";

//dado mocado
import dados from "../../dados.json";
import ModalNewCard from "../ModalNewCard";

const ProjetoKanban = () => {
  const [showModal, setShowModal] = useState(false);
  const [colunaSelecionada, setColunaSelecionada] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

  const onClickCriar = (dadosCard) => {
    console.log(dadosCard);
  };

  return (
    <Container>
      <Title className="text-center">Projeto Kanban</Title>
      <Kanban>
        {dados.map((item) => (
          <Coluna
            onClickOpenModal={handleOpen}
            key={item.id}
            titulo={item.titulo}
            cards={item.cards}
          />
        ))}
      </Kanban>
      <ModalNewCard
        onClickClose={handleClose}
        show={showModal}
        onClickCriar={onClickCriar}
      />
    </Container>
  );
};

export default ProjetoKanban;
