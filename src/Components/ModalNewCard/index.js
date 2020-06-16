import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalNewCard = ({ show, onClickClose, onClickCriar }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [info, setInfo] = useState("");

  const handleTitulo = (e) => setTitulo(e.target.value);
  const handleDescricao = (e) => setDescricao(e.target.value);
  const handleInfo = (e) => setInfo(e.target.value);

  return (
    <Modal show={show} onHide={onClickClose}>
      <Modal.Header closeButton>
        <Modal.Title>Novo Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label className="d-block">
            Titulo:
            <input
              onChange={handleTitulo}
              value={titulo}
              className="form-control"
              type="text"
              name="Titulo"
            />
          </label>
        </div>

        <div className="form-group">
          <label className="d-block">
            Descricao:
            <textarea
              onChange={handleDescricao}
              value={descricao}
              className="form-control"
              name="descricao"
            />
          </label>
        </div>

        <div className="form-group">
          <label className="d-block">
            Informaçoes:
            <input
              onChange={handleInfo}
              value={info}
              className="form-control"
              type="text"
              name="info"
            />
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClickClose}>
          Fechar
        </Button>
        <Button
          variant="primary"
          onClick={() => onClickCriar({ titulo, descricao, info })}
        >
          Criar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNewCard;
