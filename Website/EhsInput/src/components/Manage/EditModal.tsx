import "../../styles/app.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalProps {
  editname: string;
}

export default function EditModal({ editname }: ModalProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(editname);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <Button
        className="ms-2 mt-2 btn-secondary"
        variant=""
        onClick={handleShow}
      >
        Add Plant
      </Button>
      
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-width modal-height"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Werk hinzufügen
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div>
              <div className="row">
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">Name</label>
                    <input
                      title="Name"
                      type="text"
                      className="form-control"
                      id="Name"
                      aria-describedby="basic-addon3 basic-addon4"
                      value={name}
                      onChange={handleInputChange}
                    ></input>
                    <span className="input-group-text " id="basic-addon3">
                      KG
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">E-Mail</label>
                    <input
                      title="EMail"
                      type="text"
                      className="form-control"
                      id="EMail"
                      aria-describedby="basic-addon3 basic-addon4"
                      value=""
                    ></input>
                    <span className="input-group-text " id="basic-addon3">
                      KG
                    </span>
                    {/* <img src='frage.png' className='questionmark ms-3' alt='Question'/> */}
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">
                      Manager
                    </label>
                    <input
                      title="Manager"
                      type="text"
                      className="form-control"
                      id="Manager"
                      aria-describedby="basic-addon3 basic-addon4"
                      value=""
                    ></input>
                    <span className="input-group-text " id="basic-addon3">
                      KG
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">Werke</label>
                    <input
                      title="Werke"
                      type="text"
                      className="form-control"
                      id="Werke"
                      aria-describedby="basic-addon3 basic-addon4"
                      value=""
                    ></input>
                    <span className="input-group-text " id="basic-addon3">
                      KG
                    </span>
                    {/* <img src='frage.png' className='questionmark ms-3' alt='Question'/> */}
                  </div>
                </div>
              </div>
            </div>
          </>
          <>
            <div>
              <div className="row">
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">Name</label>
                    <input
                      title="Name"
                      type="text"
                      className="form-control"
                      id="Name"
                      aria-describedby="basic-addon3 basic-addon4"
                      value=""
                    ></input>
                    <span className="input-group-text " id="basic-addon3">
                      KG
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">E-Mail</label>
                    <input
                      title="EMail"
                      type="text"
                      className="form-control"
                      id="EMail"
                      aria-describedby="basic-addon3 basic-addon4"
                      value=""
                    ></input>
                    <span className="input-group-text " id="basic-addon3">
                      KG
                    </span>
                    {/* <img src='frage.png' className='questionmark ms-3' alt='Question'/> */}
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">
                      Manager
                    </label>
                    <input
                      title="Manager"
                      type="text"
                      className="form-control"
                      id="Manager"
                      aria-describedby="basic-addon3 basic-addon4"
                      value=""
                    ></input>
                    <span className="input-group-text " id="basic-addon3">
                      KG
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">Werke</label>
                    <input
                      title="Werke"
                      type="text"
                      className="form-control"
                      id="Werke"
                      aria-describedby="basic-addon3 basic-addon4"
                      value=""
                    ></input>
                    <span className="input-group-text " id="basic-addon3">
                      KG
                    </span>
                    {/* <img src='frage.png' className='questionmark ms-3' alt='Question'/> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}
