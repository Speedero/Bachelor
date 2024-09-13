import InputField from "./InputField";
import "../../styles/inputList.css";
import { Structure } from "../../models/Structure";

export interface ListInputProps {
  header: string;
  names: string[];
  units: string[];
  structure: Structure;
}

export default function ListOfInput({
  header,
  names,
  units,
  structure,
}: ListInputProps) {
  return (
    <div className="width99">
      <h2 className="mt-3 sticky-header">{header}</h2>
      <div className="row">
        {names.map((name, index) => (
          <div className="col-12 col-md-6 mb-3" key={name}>
            <InputField
              name={name}
              unit={units[index]}
              structure={structure}
              category={header}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
