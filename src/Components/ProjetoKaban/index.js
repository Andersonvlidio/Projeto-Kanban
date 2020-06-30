import React, { useState } from "react";
import Container from "../Container";
import Title from "../Title";
import Coluna from "../Coluna";
import Kanban from "../Kanban";

//dado mocado
// import dados from "../../dados.json";
import ModalNewCard from "../ModalNewCard";
import ModalNewBucket from "../ModalNewBucket";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const ProjetoKanban = () => {
  const [cards, setCards] = useState([]);
  const [buckets, setBuckets] = useState([]);
  const [showModalCard, setshowModalCard] = useState(false);
  const [showModalBucket, setShowModalBucket] = useState(false);
  const [colunaSelecionada, setColunaSelecionada] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("dadosBuckets"))
      setBuckets(JSON.parse(localStorage.getItem("dadosBuckets")));

    if (localStorage.getItem("dadosCards")) {
      setCards(JSON.parse(localStorage.getItem("dadosCards")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dadosCards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("dadosBuckets", JSON.stringify(buckets));
  });

  const handleCloseModalCard = () => setshowModalCard(false);

  const handleCloseNewBucket = () => setShowModalBucket(false);

  const handleOpenNewCard = (id) => {
    setshowModalCard(true);
    setColunaSelecionada(id);
  };

  const handleOpenNewBucket = (id) => {
    setShowModalBucket(true);
  };

  const onClickCreateCard = (dadosCard) => {
    // console.log([...cards, dadosCard]);
    setCards([...cards, dadosCard]);
    handleCloseModalCard();
  };

  const onClickCreateBucket = (dadosBucket) => {
    // console.log(...buckets, dadosBucket);
    setBuckets([...buckets, dadosBucket]);
    handleCloseNewBucket();
  };

  const deleteCard = (id) => {
    setCards(cards.filter((item) => item.cardId !== id));
  };

  const deleteBucket = (id) => {
    setCards(cards.filter((item) => item.idColuna !== id));
    setBuckets(buckets.filter((item) => item.idBucket !== id));
  };

  const renderColumns = () => {
    return buckets.map((item) => (
      <Coluna
        onClickOpenModal={handleOpenNewCard}
        idBucket={item.idBucket}
        titulo={item.titulo}
        cards={cards}
        deleteCard={deleteCard}
        deleteBucket={deleteBucket}
      />
    ));
  };

  return (
    <Container>
      <div className="row justify-content-center">
        <Title>KanbAndy</Title>
      </div>

      <Kanban>
        <DragDropContext>
          <Droppable>{renderColumns()}</Droppable>
        </DragDropContext>

        <div className="py-3">
          <button
            className="btn btn-primary btn-sm"
            onClick={handleOpenNewBucket}
          >
            Adicionar nova coluna
          </button>
        </div>
      </Kanban>

      <ModalNewBucket
        onClickCreateBucket={onClickCreateBucket}
        onClickClose={handleCloseNewBucket}
        show={showModalBucket}
      />
      <ModalNewCard
        onClickClose={handleCloseModalCard}
        show={showModalCard}
        onClickCreateCard={onClickCreateCard}
        id={colunaSelecionada}
      />
    </Container>
  );
};

export default ProjetoKanban;
