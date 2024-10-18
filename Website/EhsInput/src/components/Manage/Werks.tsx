// import { useNavigate } from "react-router-dom";
import EditModal from "./EditModal";
import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Werks() {
  const list = [
    "DE01",
    "DE02",
    "DE03",
    "DE04",
    "DE05",
    "DE06",
    "DE07",
    "DE08",
    "DE09",
  ];
  // const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("Hallo");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  var click = (test: string) => {
    setName(test);
    handleShow();
    // navigate("/editwerk?name=" + test);
  };

  return (
    <>
      <div className="d-inline-block w-50">
        <h2>Plants</h2>
        <div className="scrollTable">
          <table className="table table-bordered table-hover" id="width33">
            <thead>
              <tr>
                <th>Site Code</th>
                <th>Name</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {list.map((name) => (
                <tr key={name} onClick={() => click(name)}>
                  <td>{name}</td>
                  <td>Hannover</td>
                  <td>Deutschland</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <EditModal editname="" />
      </div>
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
                    <label className="input-group-text textWidth">Vorname</label>
                    <input
                      title="Vorname"
                      type="text"
                      className="form-control"
                      id="Vorname"
                      aria-describedby="basic-addon3 basic-addon4"
                      value={name}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">
                      Nachname
                    </label>
                    <input
                      title="Nachname"
                      type="text"
                      className="form-control"
                      id="Nachname"
                      aria-describedby="basic-addon3 basic-addon4"
                    ></input>
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
                    ></input>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">Werke</label>
                    <input className="form-check-input ms-3 mt-2" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label ms-1 mt-1" htmlFor="inlineCheckbox1">DE01</label>
                    <input className="form-check-input ms-3 mt-2" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label className="form-check-label ms-1 mt-1" htmlFor="inlineCheckbox2">DE09</label>
                    <input className="form-check-input ms-3 mt-2" type="checkbox" id="inlineCheckbox3" value="option3"/>
                    <label className="form-check-label ms-1 mt-1" htmlFor="inlineCheckbox3">JP01</label>
                    {/* <input className="form-check-input ms-3 mt-2" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label ms-1 mt-1" htmlFor="inlineCheckbox1">PL01</label>
                    <input className="form-check-input ms-3 mt-2" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label ms-1 mt-1" htmlFor="inlineCheckbox1">CN01</label> */}
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">
                      Manager
                    </label>
                    <div className="form-check ms-3 mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Ja
                      </label>
                    </div>
                    <div className="form-check ms-3 mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Nein
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <div className="input-group mx-auto w-75">
                    <label className="input-group-text textWidth">
                      Language
                    </label>
                    <input
                      title="Language"
                      type="text"
                      className="form-control"
                      id="Language"
                      aria-describedby="basic-addon3 basic-addon4"
                      // value=""
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </>
          <div className="mt-5 text-center">
            <button className="btn btn-secondary btn-lg" onClick={handleClose}>
              Speichern
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
