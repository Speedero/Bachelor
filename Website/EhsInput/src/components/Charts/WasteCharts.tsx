import { useState } from "react";
import { Line } from "react-chartjs-2";

export default function HealthCharts() {
  var test = [3, 4, 7];
  const [values, setValues] = useState(test);

  const changeData = () => {
    setValues([10, 5, 8]);
  };
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "Sales of the Week",
        data: values,
        backgroundColor: "#048ccc80",
        borderColor: "#048ccc80",
        pointStyle: "rect",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Losses of the Week",
        data: [2, 4, 8],
        backgroundColor: "#ff000080",
        borderColor: "#ff000080",
        pointStyle: "rect",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Waste Stuff",
        font: {
          size: 30,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 1,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div>
      <div className="d-flex mt-3">
        <h3 className="me-3">Werk auswählen:</h3>
        <div className="w-50">
          <select
            id="selWerk"
            className="form-select w-25 ms-3"
            aria-label="Default select example"
            defaultValue={""}
          >
            <option>Test</option>
          </select>
        </div>
      </div>
      <a className="btn btn-secondary" onClick={changeData}>
        Werte ändern
      </a>
      <div className="d-flex mt-3">
        <div className="h-50 w-50 d-inline-block">
          <Line
            id="left"
            className="h-100 w-100"
            data={data}
            options={options}
          ></Line>
        </div>
        <div className="h-50 w-50 d-inline-block">
          <Line
            id="right"
            className="h-100 w-100"
            data={data}
            options={options}
          ></Line>
        </div>
      </div>
    </div>
  );
}
