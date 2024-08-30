import { json } from "react-router-dom";
import { Months } from "../enums/Months";
import { Werks } from "../enums/Werks";
import { MonthlyReport } from "../models/MonthlyReport";
import "../styles/headers.css";
import createReportId from "./ReportIdCreate";
import { Structure } from "../models/Structure";

interface InfoHeaderProps {
  year: number;
  structure: Structure;
}

interface ReportReq {
  ReportID: string;
}
export default function InfoHeader({
  year,
  structure,
}: InfoHeaderProps) {
  var putInsideField = (succesfull: boolean) => {
    if (succesfull) {
      for (let key in structure.monthlyReport.health) {
        type ObjectKeySetter = keyof typeof structure.inputFieldSetter;
        const objKeySetter = key as ObjectKeySetter;
        type ObjectKeyHealth = keyof typeof structure.monthlyReport.health;
        const objKeyHealth = key as ObjectKeyHealth;
        structure.inputFieldSetter[objKeySetter].setInputValue(
          structure.monthlyReport.health[objKeyHealth]
        );
      }
      for (let key in structure.monthlyReport.safety) {
        type ObjectKeySetter = keyof typeof structure.inputFieldSetter;
        const objKeySetter = key as ObjectKeySetter;
        type ObjectKeySafety = keyof typeof structure.monthlyReport.safety;
        const objKeySafety = key as ObjectKeySafety;
        structure.inputFieldSetter[objKeySetter].setInputValue(
          structure.monthlyReport.safety[objKeySafety]
        );
      }
      for (let key in structure.monthlyReport.energy) {
        type ObjectKeySetter = keyof typeof structure.inputFieldSetter;
        const objKeySetter = key as ObjectKeySetter;
        type ObjectKeyEnergy = keyof typeof structure.monthlyReport.energy;
        const objKeyEnergy = key as ObjectKeyEnergy;
        structure.inputFieldSetter[objKeySetter].setInputValue(
          structure.monthlyReport.energy[objKeyEnergy]
        );
      }
      for (let key in structure.monthlyReport.material) {
        type ObjectKeySetter = keyof typeof structure.inputFieldSetter;
        const objKeySetter = key as ObjectKeySetter;
        type ObjectKeyMaterial = keyof typeof structure.monthlyReport.material;
        const objKeyMaterial = key as ObjectKeyMaterial;
        structure.inputFieldSetter[objKeySetter].setInputValue(
          structure.monthlyReport.material[objKeyMaterial]
        );
      }
      for (let key in structure.monthlyReport.waste) {
        type ObjectKeySetter = keyof typeof structure.inputFieldSetter;
        const objKeySetter = key as ObjectKeySetter;
        type ObjectKeyWaste = keyof typeof structure.monthlyReport.waste;
        const objKeyWaste = key as ObjectKeyWaste;
        structure.inputFieldSetter[objKeySetter].setInputValue(
          structure.monthlyReport.waste[objKeyWaste]
        );
      }
    } else {
      for (let key in structure.inputFieldSetter) {
        type ObjectKeySetter = keyof typeof structure.inputFieldSetter;
        const objKeySetter = key as ObjectKeySetter;
        structure.inputFieldSetter[objKeySetter].setInputValue(0);
      }
    }
  };

  var handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      structure.monthlyReport.werk = event.target.value as Werks;
      console.log(structure.monthlyReport.werk);
      var reportId = createReportId(
        structure.monthlyReport.month,
        year,
        structure.monthlyReport.werk
      );

      const reportReq: ReportReq = {
        ReportID: reportId,
      };
      console.log(JSON.stringify(reportReq));

      const response = await fetch(
        "https://ehsinformationapi.azure-api.net/EhsInfoSystem/GetMonthlyReport",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": "65fa6264eed447b493bd2bd0f6689c01",
          },
          body: JSON.stringify(reportReq),
        }
      );

      if (response.status === 204) {
        console.log("No Content for this ReportID");
        putInsideField(false);
      } else if (response.ok) {
        structure.monthlyReport = await response.json();
        console.log("Success:", response.statusText);
        console.log(structure.monthlyReport);
        putInsideField(true);
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    structure.monthlyReport.month = Number(event.target.value) as Months;
    var reportid = createReportId(
      structure.monthlyReport.month,
      year,
      Werks.Hannover
    );
    console.log(reportid);
  };

  return (
    <div className="mx-auto">
      <h1 className="text-center">FMS EHS Input</h1>
      <div className="d-flex justify-content-center align-items-center">
        <h3>Monat:</h3>
        <select
          className="form-select w-25 ms-3"
          aria-label="Default select example"
          onChange={handleMonthChange}
        >
          <option selected>Monat auswählen</option>
          <option value={Months.January}>Januar</option>
          <option value={Months.February}>Februar</option>
          <option value={Months.March}>März</option>
          <option value={Months.April}>April</option>
          <option value={Months.May}>Mai</option>
          <option value={Months.June}>Juni</option>
          <option value={Months.July}>Juli</option>
          <option value={Months.August}>August</option>
          <option value={Months.September}>September</option>
          <option value={Months.October}>Oktober</option>
          <option value={Months.November}>November</option>
          <option value={Months.December}>Dezember</option>
        </select>
        <h3 className=" ms-3">{year}</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <h3 className="mb-0">Werk:</h3>
        <select
          className="form-select w-25 ms-3"
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option selected>Werk auswählen</option>
          <option value={Werks.Hannover}>Hannover</option>
          <option value={Werks.Garbsen}>Garbsen</option>
          <option value={Werks.Wallbach}>Wallbach</option>
          <option value={Werks.Malckay}>Malacky</option>
          <option value={Werks.Japan}>Japan</option>
          <option value={Werks.Charlotte}>Charlotte</option>
          <option value={Werks.Huntersville}>Huntersville</option>
          <option value={Werks.Lunderskov}>Lunderskov</option>
          <option value={Werks.Pinghu}>Pinghu</option>
          <option value={Werks.Shengyang}>Shenyang</option>
        </select>
      </div>
    </div>
  );
}
