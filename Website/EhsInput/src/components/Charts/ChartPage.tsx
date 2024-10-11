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
  const test = [3, 4, 7];
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "Sales of the Week",
        data: test,
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

  /* Set the width of the side navigation to 250px */

  return (
    <div id="mainpage">
      <div id="mySidenav" className="sidenav">
        <img className=" ms-3 logoSize " src="forboLogo.png" alt="Forbo Logo" />
        <a href="#">Übersicht</a>
        <a href="#">Gesundheit</a>
        <a href="#">Sicherheit</a>
        <a href="#">Energie</a>
        <a href="#">Material</a>
        <a href="#">Abfall</a>
      </div>

      <div className="ms-3 chartpagediv">
        <h1 className="mt-2">TEST CHART</h1>
        <div className="d-flex mt-3">
          <h3 className="me-3">Werk auswählen:</h3>
          <div className="w-50">
            <select
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
              className="form-select"
              aria-label="Default select example"
              defaultValue={""}
            >
              <option>Test</option>
            </select>
          </div>
          <div className="d-inline-block width10 ms-4">
            <select
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
