import InputField from "./InputField";
import "../styles/inputList.css";
import { Structure } from "../models/Structure";

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
    <>
      <h2 className="marginTopSub">{header}</h2>
      {names.map((name, index) => (
        <InputField
          key={name}
          name={name}
          unit={units[index]}
          structure={structure}
          category={header}
        />
      ))}
    </>
  );
}
