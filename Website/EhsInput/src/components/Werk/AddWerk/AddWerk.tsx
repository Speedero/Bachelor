import Popup from "../../Input/Popup";

export default function AddWerk() {
  return (
    <>
      <h1 className="my-4 ms-2">Add Werk</h1>

      <div>
        <div className="row">
          <div className="col-12 col-md-6 mt-5">
            <div className="input-group mx-auto w-75">
              <label className="input-group-text textWidth">Name</label>
              <input
                title="Name"
                type="number"
                className="form-control"
                id="Name"
                aria-describedby="basic-addon3 basic-addon4"
                value="{inputValue}"
              ></input>
              <span className="input-group-text " id="basic-addon3">
                KG
              </span>
              <Popup />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <div className="input-group mx-auto w-75">
              <label className="input-group-text textWidth">E-Mail</label>
              <input
                title="EMail"
                type="number"
                className="form-control"
                id="EMail"
                aria-describedby="basic-addon3 basic-addon4"
                value="{inputValue}"
              ></input>
              <span className="input-group-text " id="basic-addon3">
                KG
              </span>
              <Popup />
              {/* <img src='frage.png' className='questionmark ms-3' alt='Question'/> */}
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <div className="input-group mx-auto w-75">
              <label className="input-group-text textWidth">Manager</label>
              <input
                title="Manager"
                type="number"
                className="form-control"
                id="Manager"
                aria-describedby="basic-addon3 basic-addon4"
                value="{inputValue}"
              ></input>
              <span className="input-group-text " id="basic-addon3">
                KG
              </span>
              <Popup />
              
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <div className="input-group mx-auto w-75">
              <label className="input-group-text textWidth">Werke</label>
              <input
                title="Werke"
                type="number"
                className="form-control"
                id="Werke"
                aria-describedby="basic-addon3 basic-addon4"
                value="{inputValue}"
              ></input>
              <span className="input-group-text " id="basic-addon3">
                KG
              </span>
              <Popup />
              {/* <img src='frage.png' className='questionmark ms-3' alt='Question'/> */}
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn btn-secondary btn-lg mt-4 me-2 position-absolute top-0 end-0"
        href="/manage"
      >
        Back
      </a>
    </>
  );
}
