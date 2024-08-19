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
          type="submit"
          className="btn btn-secondary btn-lg position-absolute start-50 translate-middle-x"
          onClick={handeClick}
        >
          Submit
        </button>
      </div>
    </>
  );
}

const handeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();

  const response = await fetch("https://ehsinformationapi.azure-api.net/EhsInfoSystem/CreateItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ReportID: "DE01112023",
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log("Success:", data);
};
