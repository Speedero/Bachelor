import "../../styles/app.css";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

export default function ChartPage() {
  var test = [3, 4, 7];
  const [values, setValues] = useState(test);
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
        text: "Health Stuff",
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
  const changeData = () => {
    setValues([10, 5, 8]);
  };

  return (
    <div id="mainpage">
      <Sidebar
        inputOpen={false}
        chartOpen={true}
        manageOpen={false}
        activeSection=""
      />

      <div className="ms-3 chartpagediv">
        <h1 className="mt-2">TEST CHART</h1>
        <a className="btn btn-primary" onClick={changeData}>
          CHANGE DATA
        </a>
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
          <aside></aside>
        </div>
        <div className="mt-3 d-flex align-items-center">
          <h3 className="me-3">Werk vergleichen:</h3>
          <div className="d-inline-block width10">
            <select
              id="selWerk1"
              className="form-select"
              aria-label="Default select example"
              defaultValue={""}
            >
              <option>Test</option>
            </select>
          </div>
          <div className="d-inline-block width10 ms-4">
            <select
              id="selWerk2"
              className="form-select"
              aria-label="Default select example"
              defaultValue={""}
            >
              <option>Test</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
