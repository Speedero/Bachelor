import "../../styles/inputField.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function NewPeriodPopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="ms-2 mt-2 btn-success" variant="" onClick={handleShow}>
        New Period
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Neue Periode beginnen
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Möchten Sie die Aktuelle Periode (September 2024) beenden und die
            Neue Periode (Oktober 2024) beginnen?
          </div>
          <br />
          <div className="float-end">
            <button onClick={handleClose} className="btn btn-success">Ja</button>
            <button onClick={handleClose} className="ms-2 btn btn-danger">Nein</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
