import { MonthlyReport } from "../../models/MonthlyReport";
import { Structure } from "../../models/Structure";
import createReportId from "./ReportIdCreate";

interface SubmitButtonProps {
  structure: Structure;
}

export default function SubmitButton({ structure }: SubmitButtonProps) {
  return (
      <button
        type="submit"
        className="btn btn-primary btn-lg my-4 text-center"
        onClick={() => handleSubmit(structure.monthlyReport)}
      >
        Submit
      </button>
  );
}

var setSystemTime = (report: MonthlyReport) => {
  const now = new Date();
  const current = now.toLocaleString().split(", ")
  report.lastChangeDate = current[0];
  report.lastChangeTime = current[1];
}

var handleSubmit = async (report: MonthlyReport) => {
  try {
    setSystemTime(report);
    report.ReportID = createReportId(report.month, report.year, report.werk);
    console.log(report);
    const response = await fetch(
      "https://ehsinformationapi.azure-api.net/EhsInfoSystem/CreateItem",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": "65fa6264eed447b493bd2bd0f6689c01",
        },
        body: JSON.stringify(report),
      }
    );

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
