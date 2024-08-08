import InputField from "./InputField";
import '../styles/inputList.css';

export interface ListInputProps {
  header: string;
  names: string[];
  units: string[];
}
export default function ListOfInput({ header, names, units }: ListInputProps) {
  return (
    <>
      <h2 className="marginTopSub">{header}</h2>
      {names.map((name, index) => (
        <InputField key={name} name={name} unit={units[index]} />
      ))}
    </>
  );
}
