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
  Colors,
} from "chart.js";

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Colors
);

export default function ChartPage() {
  const test = [3, 4, 7];
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "Sales of the Week",
        data: test,
        backgroundColor: "blue",
        borderColor: "#048ccc",
        pointStyle: "rect",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Losses of the Week",
        data: [2,4,8],
        backgroundColor: "blue",
        borderColor: "red",
        pointStyle: "rect",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    plugins: {
      colors: {
        enabled: true,
      },
    },
    scales: {
      y: {
        // min: 3,
        // max: 7,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  /* Set the width of the side navigation to 250px */
  const openNav = () => {
    document.getElementById("mySidenav")!.style.width = "250px";
    document.getElementById("root")!.style.marginLeft = "250px";
    document.getElementById("mySidenav")!.style.display = "block";
  };

  /* Set the width of the side navigation to 0 */
  const closeNav = () => {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("root")!.style.marginLeft = "0";
    document.getElementById("mySidenav")!.style.display = "none";
    document.getElementById("left")!.style.width = "100%";
    document.getElementById("right")!.style.width = "100%";
    document.getElementById("left")!.style.height = "100%";
    document.getElementById("right")!.style.height = "100%";
    
  };

  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <span onClick={openNav} className="btn btn-secondary">
        open
      </span>

      <h1>TEST CHART</h1>
      <div className="d-flex">
        <div className="h-50 w-50 d-inline-block">
          <Line id="left" data={data} options={options}></Line>
        </div>
        <div className="h-50 w-50 d-inline-block">
          <Line id="right" data={data} options={options}></Line>
        </div>
        <aside></aside>
      </div>
    </>
  );
}
