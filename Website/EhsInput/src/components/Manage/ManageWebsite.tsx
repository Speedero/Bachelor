

import Employees from "./Employees";
import NewPeriodPopUp from "./NewPeriodPopUp";
import Werks from "./Werks"

export default function ManageWebsite() {
  return (
    <>
      <div className="mt-4 mx-2">
        <h1>Manage Website</h1>
      </div>
      <div className="d-flex align-items-center mt-5 mx-2">
        <Werks/>
        <Employees/>
      </div>
      <div className="my-5 mx-2 text-center">
        <h2>Periode</h2>
        <div>Aktuelle Periode: September 2024</div>
        <NewPeriodPopUp/>
      </div>
      <a
        className="btn btn-secondary btn-lg mt-4 me-2 position-absolute top-0 end-0"
        href="/"
      >
        Back
      </a>
    </>
  );
}
