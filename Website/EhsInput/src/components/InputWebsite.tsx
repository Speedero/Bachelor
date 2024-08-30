import InfoHeader from "./InfoHeader";
import ListOfInput from "./ListOfInput";
import SubmitButton from "./SubmitButton";
import { Link } from "react-router-dom";
import { Structure } from "../models/Structure";
import "../styles/app.css";

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
    <>
      <img
        className="logoSize position-absolute top-0 start-0"
        src="forboLogo.jpg"
        alt="Forbo Logo"
      />
      <div className="container centerText mt-4">
        <InfoHeader year={2024} structure={structure} />
        <a
          className="btn btn-secondary btn-lg mt-5 me-5 position-absolute top-0 end-0"
          href="/manage"
        >
          Manage
        </a>
        <div className="mt-5">
          {ListInput.map((input) => (
            <ListOfInput
              names={input.names}
              units={input.units}
              header={input.header}
              structure={structure}
            />
          ))}
        </div>
        <SubmitButton structure={structure} />
      </div>
    </>
  );
}
