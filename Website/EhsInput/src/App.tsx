import InfoHeader from "./components/InfoHeader";
import ListOfInput from "./components/ListOfInput";
import "./styles/app.css";

export default function App() {
  const names = [
    "Arbeitsstunden",
    "Schlafstunden",
    "Essensstunden",
    "Freizeitstunden",
    "Sportstunden",
    "Familienstunden",
    "Sonstige",
  ];
  const units = [
    "Hours",
    "Hours",
    "Hours",
    "Hours",
    "Hours",
    "Hours",
    "Minutes",
  ];
  const ListInput = [
    { header: "Test", names: names, units: units },
    { header: "ABCS", names: names, units: units },
    { header: "WirdSchon", names: names, units: units },
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
          />
        ))}
        <button
          type="button"
          className="btn btn-secondary btn-lg position-absolute start-50 translate-middle-x"
        >
          Submit
        </button>
      </div>
    </>
  );
}
