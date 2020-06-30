import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalNewBucket = ({
  show,
  onClickClose,
  onClickCreateBucket,
  id: idBucket,
}) => {
  const [titulo, setTitulo] = useState("");

  const handleTitulo = (e) => setTitulo(e.target.value);

  return (
    <Modal show={show} onHide={onClickClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nova Coluna</Modal.Title>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClickClose}>
          Fechar
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onClickCreateBucket({
              titulo,
              idBucket: Date.now(),
            });
            setTitulo("");
          }}
        >
          Criar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNewBucket;
