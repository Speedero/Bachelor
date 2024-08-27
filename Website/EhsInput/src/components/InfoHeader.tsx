import { json } from "react-router-dom";
import { Months } from "../enums/Months";
import { Werks } from "../enums/Werks";
import { MonthlyReport } from "../models/MonthlyReport";
import "../styles/headers.css";
import createReportId from "./ReportIdCreate";

interface InfoHeaderProps {
  month: string;
  year: number;
  werk: string;
  report: MonthlyReport;
}

interface ReportReq {
  ReportID: string;
}
export default function InfoHeader({
  month,
  year,
  werk,
  report,
}: InfoHeaderProps) {
  var handleChange = async () => {
    try {
      var reportId = createReportId(Months.April, year, Werks.Hannover);

      const reportReq: ReportReq = {
        ReportID: "DE01052024",
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
      } else if (response.ok) {
        report = await response.json();
        console.log("Success:", response.statusText);
        console.log(report);
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-auto">
      <h1 className="text-center">FMS EHS Input</h1>
      <h3>
        Monat: {month} {year}
      </h3>
      <div className="d-flex justify-content-center align-items-center">
        <h3 className="mb-0">Werk:</h3>
        <select
          className="form-select w-25 ms-3"
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option selected>Werk auswählen</option>
          <option value="hannover">Hannover</option>
          <option value="garbsen">Garbsen</option>
          <option value="wallbach">Wallbach</option>
          <option value="malacky">Malacky</option>
          <option value="japan">Japan</option>
          <option value="charlotte">Charlotte</option>
          <option value="huntersville">Huntersville</option>
          <option value="lunderskov">Lunderskov</option>
          <option value="pinghu">Pinghu</option>
          <option value="shenyang">Shenyang</option>
        </select>
      </div>
    </div>
  );
}
