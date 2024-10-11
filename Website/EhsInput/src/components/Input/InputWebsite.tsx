import InfoHeader from "./InfoHeader";
import ListOfInput from "./ListOfInput";
import SubmitButton from "./SubmitButton";
import { Structure } from "../../models/Structure";
import "../../styles/app.css";

export default function InputWebsite() {
  var structure = new Structure();

  const ListInput = [
    {
      header: "Health",
      names: structure.healthFields,
      units: structure.healthUnits,
    },
    {
      header: "Safety",
      names: structure.safetyFields,
      units: structure.safetyUnits,
    },
    {
      header: "Energy",
      names: structure.energyFields,
      units: structure.energyUnits,
    },
    {
      header: "Material",
      names: structure.materialFields,
      units: structure.materialUnits,
    },
    {
      header: "Waste",
      names: structure.wasteFields,
      units: structure.wasteUnits,
    },
  ];

  return (
    <div id="mainpage">
      <div id="mySidenav" className="sidenav">
        <img className=" ms-3 logoSize " src="forboLogo.png" alt="Forbo Logo" />
        <a href="#">Eingabe</a>
        <a href="#">Manage</a>
        <a href="#">Graphen</a>
        <a href="#">Einstellungen</a>
        <a href="#">FAQ</a>
      </div>
      <div className="mx-3 centerText mt-4">
        <InfoHeader year={2024} structure={structure} />
        <a
          className="btn btn-secondary btn-lg mt-4 me-2 position-absolute top-0 end-0"
          href="/manage"
        >
          Manage
        </a>
        <div className="mt-3 scroll">
          {ListInput.map((input, count) => (
            <ListOfInput
              names={input.names}
              units={input.units}
              header={input.header}
              structure={structure}
              key={count}
            />
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <div className="mx-auto">
            <SubmitButton structure={structure} />
          </div>
        </div>
      </div>
    </div>
  );
}
