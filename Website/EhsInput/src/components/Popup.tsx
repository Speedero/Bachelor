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

  //   <div>
  //     <button
  //       type="button"
  //       className="btn btn-primary ms-2"
  //       data-bs-toggle="modal"
  //       data-bs-target="#Modal"
  //     >
  //       {/* <img className="questionmark" src="frage.png" alt="Fragezeichen"/> */}
  //       TEST
  //     </button>
  //     <div
  //       className="modal fade"
  //       id="Modal"
  //       tabIndex={-1}
  //       aria-labelledby="ModalLabel"
  //       aria-hidden="true"
  //     >
  //       <div className="modal-dialog">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h1 className="modal-title fs-5" id="ModalLabel">
  //               Modal title
  //             </h1>
  //             <button
  //               type="button"
  //               className="btn-close"
  //               data-bs-dismiss="modal"
  //               aria-label="Close"
  //             ></button>
  //           </div>
  //           <div className="modal-body">...</div>
  //           <div className="modal-footer">
  //             <button
  //               type="button"
  //               className="btn btn-secondary"
  //               data-bs-dismiss="modal"
  //             >
  //               Close
  //             </button>
  //             <button type="button" className="btn btn-primary">
  //               Save changes
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
