import InfoHeader from "./components/InfoHeader";
import ListOfInput from "./components/ListOfInput";
import SubmitButton from "./components/SubmitButton";
import { MonthlyReport } from "./models/MonthlyReport";
import { Structure } from "./models/Structure";
import "./styles/app.css";

export default function App() {

  var structure = new Structure();
  
  const ListInput = [
    { header: "Health", names: structure.healthFields, units: structure.healthUnits },
    { header: "Safety", names: structure.safetyFields, units: structure.safetyUnits },
    { header: "Energy", names: structure.energyFields, units: structure.energyUnits },
    { header: "Material", names: structure.materialFields, units: structure.materialUnits },
    { header: "Waste", names: structure.wasteFields, units: structure.wasteUnits },
  ];

  return (
    <>
      <img
        className="logoSize position-absolute top-0 start-0"
        src="forboLogo.jpg"
        alt="Forbo Logo"
      />
      <div className="container centerText marginTopAll">
        <InfoHeader month="Mai" year={2024} werk="Hannover" />
        {ListInput.map((input) => (
          <ListOfInput
            names={input.names}
            units={input.units}
            header={input.header}
            report={structure.monthlyReport}
          />
        ))}

        <SubmitButton />
      </div>
    </>
  );
}
