import InputField from "./InputField";
import "../styles/inputList.css";
import { MonthlyReport } from "../models/MonthlyReport";

export interface ListInputProps {
  header: string;
  names: string[];
  units: string[];
  report: MonthlyReport;
}

export default function ListOfInput({
  header,
  names,
  units,
  report,
}: ListInputProps) {
  return (
    <>
      <h2 className="marginTopSub">{header}</h2>
      {names.map((name, index) => (
        <InputField
          key={name}
          name={name}
          unit={units[index]}
          report={report}
          category={header}
        />
      ))}
    </>
  );
}
