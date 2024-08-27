import { MonthlyReport } from "../models/MonthlyReport";
import createReportId from "./ReportIdCreate";

interface SubmitButtonProps {
  report: MonthlyReport;
}
var thisReport: MonthlyReport;

export default function SubmitButton({ report }: SubmitButtonProps) {
  thisReport = report;

  return (
    <button
    type="submit"
    className="btn btn-secondary btn-lg position-absolute start-50 translate-middle-x"
    onClick={() => handleSubmit(report)}
    >
      Submit
    </button>
  );
}


var handleSubmit = async (report: MonthlyReport) => {
  try {
    report.ReportID = createReportId(report.month, report.year, report.werk);
    const response = await fetch("https://ehsinformationapi.azure-api.net/EhsInfoSystem/CreateItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "65fa6264eed447b493bd2bd0f6689c01",
      },
      body: JSON.stringify(report),
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    const data = await response.json();
    console.log("Success:", response.statusText);
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
  };
  