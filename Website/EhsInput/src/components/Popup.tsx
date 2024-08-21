import "../styles/inputField.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface InputProps {
  text: number;
  language: string;
}

export default function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="ms-2 rounded" variant="" onClick={handleShow}>
        <img src="frage.png" className="questionmark" alt="Question" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Name der Komponente</Modal.Title>
        </Modal.Header>
        <Modal.Body>Information über Komponente etc.</Modal.Body>
        
      </Modal>
    </>
  );
}
